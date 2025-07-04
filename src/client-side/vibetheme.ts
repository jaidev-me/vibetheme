import type { ThemeVarConfig } from './vibetheme.config.js';

interface Theme {
  name: string;
  vars: Record<string, string>  
}

export interface VibeThemeConfig {
  themes?: Theme[];
  defaultTheme?: string;
  storageKey?: string;
  enableSystemTheme?: boolean;
  onThemeChange?: (theme: Theme) => void;
  themeConfig?: ThemeVarConfig[];
}

export class VibeTheme {
  private themes: Map<string, Theme> = new Map();
  private currentTheme: string = 'light';
  private storageKey: string = 'vibetheme-theme';
  private enableSystemTheme: boolean = true;
  private onThemeChange?: (theme: Theme) => void;
  private themeConfig?: ThemeVarConfig[];
  private mediaQuery?: MediaQueryList;

  constructor(config: VibeThemeConfig = {}) {
    this.storageKey = config.storageKey || 'vibetheme-theme';
    this.enableSystemTheme = config.enableSystemTheme ?? true;
    this.onThemeChange = config.onThemeChange;
    this.themeConfig = config.themeConfig;


    // Add custom themes if provided
    if (config.themes) {
      config.themes.forEach(theme => {
        this.themes.set(theme.name, theme);
      });
    }

    this.currentTheme = config.defaultTheme || 'light';
    this.init();
  }

  private init(): void {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem(this.storageKey);
    if (savedTheme && this.themes.has(savedTheme)) {
      this.currentTheme = savedTheme;
    } else if (this.enableSystemTheme) {
      // Check system preference
      this.currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Set up system theme monitoring
    if (this.enableSystemTheme) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.storageKey)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        } 
      });
    }

    // Apply initial theme
    this.applyTheme(this.currentTheme);
  }

  private applyTheme(themeName: string): void {
    const theme = this.themes.get(themeName);
    if (!theme) return;

    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove(...Array.from(this.themes.keys()));
    
    // Add current theme class
    root.classList.add(themeName);

    // Apply CSS variables
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // Update meta theme-color for mobile browsers
    let metaThemeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }

    // Trigger change callback
    if (this.onThemeChange) {
      this.onThemeChange(theme);
    }
  }

  public setTheme(themeName: string): void {
    if (!this.themes.has(themeName)) {
      throw new Error(`Theme "${themeName}" not found`);
    }

    this.currentTheme = themeName;
    localStorage.setItem(this.storageKey, themeName);
    this.applyTheme(themeName);
  }

  public getTheme(): string {
    return this.currentTheme;
  }

  public getAllThemes(): Theme[] {
    return Array.from(this.themes.values());
  }

  public addTheme(theme: Theme): void {
    this.themes.set(theme.name, theme);
  }

  public removeTheme(themeName: string): void {
    if (!this.themes.has(themeName)) {
      throw new Error(`Theme "${themeName}" not found`);
    }
    this.themes.delete(themeName);
  }

  public clearSavedTheme(): void {
    localStorage.removeItem(this.storageKey);
    if (this.enableSystemTheme) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      this.setTheme(systemTheme);
    }
  }

  public destroy(): void {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change',   () => {});
    }
  }

  // Get the current theme configuration
  public getThemeConfig(): ThemeVarConfig[] | undefined {
    return this.themeConfig;
  }
}

// Export default instance for quick usage
export const vibetheme = new VibeTheme(); 