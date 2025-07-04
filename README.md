# VibeTheme

A lightweight, vanilla JavaScript library for runtime theme switching with Tailwind CSS compatibility. Supports predefined themes, custom user-defined themes, and AI-generated themes.

## ✨ Features

- 🎨 **Predefined Themes**: Light, dark, and sepia themes with proper contrast ratios
- 🎯 **Custom Theme Builder**: Interactive color picker interface with real-time preview
- 🤖 **AI Theme Generation**: Generate themes from natural language prompts
- 💾 **Persistent Storage**: Automatically saves theme preferences in localStorage
- 🌓 **System Theme Sync**: Respects `prefers-color-scheme` media query
- ♿ **Accessibility First**: ARIA attributes, keyboard navigation, screen reader support
- 🎪 **Tailwind Compatible**: Seamless integration with Tailwind CSS
- 📦 **Zero Dependencies**: Pure vanilla JavaScript, no external dependencies
- 🔧 **TypeScript Support**: Full TypeScript definitions included

## 🚀 Quick Start

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --background: 0 0% 100%;
      --foreground: 222.2 84% 4.9%;
      --primary: 221.2 83.2% 53.3%;
      /* ... other CSS variables */
    }
    
    body {
      background: hsl(var(--background));
      color: hsl(var(--foreground));
    }
  </style>
</head>
<body>
  <button data-theme="light">Light</button>
  <button data-theme="dark">Dark</button>
  <button data-theme="sepia">Sepia</button>

  <script type="module">
    import { VibeTheme } from './src/vibetheme.js';
    
    const vibeTheme = new VibeTheme();
    
    // Theme switching
    document.querySelectorAll('[data-theme]').forEach(button => {
      button.addEventListener('click', () => {
        vibeTheme.setTheme(button.dataset.theme);
      });
    });
  </script>
</body>
</html>
```

### Complete Setup

```javascript
import { createVibeTheme, allThemes, defaultThemeConfig } from './src/index.js';

const vibeTheme = createVibeTheme({
  themes: allThemes,          // Use all predefined themes
  defaultTheme: 'light',
  themeConfig: defaultThemeConfig,
  enableCustomBuilder: true,
  customBuilderContainer: '#theme-builder',
  enableAI: true,
  aiEndpoint: 'https://api.openai.com/v1/chat/completions',
  aiKey: 'your-api-key',
  enableAccessibility: true,
  onThemeChange: (theme) => {
    console.log('Theme changed to:', theme.name);
  }
});
```

## 🎨 Predefined Themes

VibeTheme comes with 7 carefully crafted themes in `src/vibethemes.ts`:

```typescript
import { 
  // Individual themes
  lightTheme, 
  darkTheme, 
  sepiaTheme,
  oceanTheme,
  forestTheme,
  sunsetTheme,
  highContrastTheme,
  
  // Theme collections
  allThemes,              // All 7 themes
  basicThemes,           // light, dark, sepia
  colorfulThemes,        // ocean, forest, sunset
  accessibilityThemes,   // light, dark, high-contrast
  
  // Utility functions
  createThemeCollection,
  getThemeByName,
  validateThemeNames
} from './src/index.js';

// Use specific theme collection
const vibeTheme = createVibeTheme({
  themes: basicThemes,     // Only light, dark, sepia
  defaultTheme: 'light',
  themeConfig: defaultThemeConfig
});

// Create custom collection
const myThemes = createThemeCollection(['light', 'ocean', 'forest']);

// Add your own themes
const myCustomTheme = {
  name: 'neon',
  colors: { /* theme colors */ }
};

const vibeTheme = createVibeTheme({
  themes: [...allThemes, myCustomTheme],
  defaultTheme: 'neon',
  themeConfig: defaultThemeConfig
});
```

## 📖 API Reference

### Core Theme System

#### `VibeTheme`

```typescript
const vibeTheme = new VibeTheme({
  themes?: Theme[],           // Additional custom themes
  defaultTheme?: string,      // Default theme name
  storageKey?: string,        // localStorage key
  enableSystemTheme?: boolean, // Sync with system preference
  onThemeChange?: (theme: Theme) => void
});
```

**Methods:**
- `setTheme(themeName: string)` - Switch to a theme
- `getTheme(): string` - Get current theme name
- `getAllThemes(): Theme[]` - Get all available themes
- `addTheme(theme: Theme)` - Add a custom theme
- `removeTheme(themeName: string)` - Remove a theme
- `clearSavedTheme()` - Clear localStorage and reset to system preference
- `destroy()` - Clean up event listeners

### Custom Theme Builder

#### `CustomThemeBuilder`

```typescript
const builder = new CustomThemeBuilder({
  container: '#theme-builder',  // Container element or selector
  vibeTheme: vibeTheme,        // VibeTheme instance
  onThemeUpdate?: (theme: Theme) => void,
  enablePreview?: boolean      // Show preview card
});
```

### AI Theme Generator

#### `AIThemeGenerator`

```typescript
const generator = new AIThemeGenerator({
  vibeTheme: vibeTheme,
  onThemeGenerated?: (theme: Theme) => void,
  apiEndpoint?: string,        // AI API endpoint
  apiKey?: string             // AI API key
});

// Generate theme from prompt
const theme = await generator.generateTheme("vibrant creative theme");

// Generate and apply immediately
await generator.generateAndApplyTheme("dark purple theme");
```

**Supported Prompts:**
- Style keywords: `minimal`, `vibrant`, `dark`, `light`, `high-contrast`, `pastel`, `corporate`, `creative`
- Mood keywords: `calm`, `energetic`, `professional`, `playful`, `elegant`, `bold`
- Color keywords: `red`, `blue`, `green`, `purple`, `orange`, `yellow`, `pink`, `teal`

### Accessibility Features

#### `VibeThemeAccessibility`

```typescript
const accessibility = new VibeThemeAccessibility({
  vibeTheme: vibeTheme,
  announceThemeChanges?: boolean,    // Screen reader announcements
  enableKeyboardNavigation?: boolean, // Alt+Arrow key navigation
  enableHighContrastMode?: boolean,   // High contrast theme support
  enableMotionReduction?: boolean     // Reduced motion support
});

// Make any element theme-accessible
accessibility.makeThemeControlAccessible(element, 'dark');

// Add skip link for keyboard users
accessibility.addSkipLink();

// Custom announcements
accessibility.announceCustomMessage('Custom theme created');
```

**Keyboard Shortcuts:**
- `Alt + →/↓` - Next theme
- `Alt + ←/↑` - Previous theme  
- `Alt + Home` - First theme
- `Alt + End` - Last theme
- `Alt + 1-9` - Switch to theme by number

## 🎨 Theme Structure

```typescript
interface Theme {
  name: string;
  colors: {
    background: string;          // Main background
    foreground: string;          // Main text color
    primary: string;             // Primary accent
    'primary-foreground': string;
    secondary: string;           // Secondary accent
    'secondary-foreground': string;
    muted: string;              // Muted backgrounds
    'muted-foreground': string;
    accent: string;             // Accent backgrounds
    'accent-foreground': string;
    destructive: string;        // Error/danger color
    'destructive-foreground': string;
    border: string;             // Border color
    input: string;              // Input border color
    ring: string;               // Focus ring color
    card: string;               // Card background
    'card-foreground': string;
    popover: string;            // Popover background
    'popover-foreground': string;
  };
}
```

Colors are defined in HSL format without the `hsl()` wrapper:
```css
/* Example */
--primary: 221.2 83.2% 53.3%;
```

## 🎯 Tailwind CSS Integration

Add these CSS variables to your Tailwind config:

```css
/* tailwind.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... all theme variables */
}

/* Utility classes */
.bg-background { background-color: hsl(var(--background)); }
.text-foreground { color: hsl(var(--foreground)); }
.bg-primary { background-color: hsl(var(--primary)); }
.text-primary-foreground { color: hsl(var(--primary-foreground)); }
/* ... etc */
```

Or use the utility function:

```javascript
import { generateTailwindCSS } from './src/index.js';
console.log(generateTailwindCSS()); // Complete CSS output
```

## 🔧 Theme Configuration

### Custom Theme Variables

Users can create their own `vibetheme.config.ts` to define theme variables for their design system:

```typescript
// vibetheme.config.ts
import type { ThemeVarConfig } from './src/vibetheme.config.js';

const myThemeConfig: ThemeVarConfig[] = [
  {
    name: 'Primary Background',    // Display name in UI
    var: 'bg-primary',            // CSS variable name
    aiDescription: 'Main background color for the application'  // For AI generation
  },
  {
    name: 'Brand Color',
    var: 'brand',
    aiDescription: 'Main brand color for buttons and highlights'
  },
  {
    name: 'Success Color',
    var: 'success',
    aiDescription: 'Success state color for positive feedback'
  }
  // ... more variables
];

export default myThemeConfig;
```

### Using Custom Configuration

```typescript
import { createVibeTheme } from './src/index.js';
import myThemeConfig from './vibetheme.config.js';

const vibeTheme = createVibeTheme({
  themeConfig: myThemeConfig,  // Required when enableCustomBuilder or enableAI is true
  themes: [myCustomTheme],
  enableCustomBuilder: true,
  customBuilderContainer: '#theme-builder'
});
```

**Important**: The `themeConfig` is **required** when `enableCustomBuilder` or `enableAI` is set to `true`. If you try to enable these features without providing a theme configuration, VibeTheme will throw an error.

### When Theme Config is Required

| Feature | Theme Config Required | Reason |
|---------|----------------------|--------|
| Basic theme switching | ❌ No | Uses predefined themes |
| Custom theme builder | ✅ Yes | Needs to know which variables to show |
| AI theme generation | ✅ Yes | Needs variable descriptions for better AI prompts |
| Accessibility features | ❌ No | Works with any theme structure |

```typescript
// ✅ This works - no custom features enabled
const basicVibeTheme = createVibeTheme({
  defaultTheme: 'dark'
});

// ❌ This throws an error - custom builder enabled without config
const customVibeTheme = createVibeTheme({
  enableCustomBuilder: true,
  customBuilderContainer: '#builder'
  // Missing themeConfig!
});

// ✅ This works - config provided for custom features
import { defaultThemeConfig } from './src/index.js';
const customVibeTheme = createVibeTheme({
  themeConfig: defaultThemeConfig,
  enableCustomBuilder: true,
  customBuilderContainer: '#builder'
});
```

### Configuration Validation & Utilities

```typescript
import { 
  validateThemeConfig, 
  generateThemeColorsInterface,
  generateCSSFromConfig,
  generateTailwindFromConfig 
} from './src/index.js';

// Validate your configuration
const validation = validateThemeConfig(myThemeConfig);
if (!validation.valid) {
  console.error('Config issues:', validation.issues);
}

// Generate TypeScript interface
console.log(generateThemeColorsInterface(myThemeConfig));

// Generate CSS variables template
console.log(generateCSSFromConfig(myThemeConfig));

// Generate Tailwind utilities
console.log(generateTailwindFromConfig(myThemeConfig));
```

## 🔧 Advanced Usage

### Custom Themes

```javascript
const customTheme = {
  name: 'ocean',
  colors: {
    background: '200 50% 90%',
    foreground: '200 100% 10%',
    primary: '200 100% 50%',
    'primary-foreground': '200 10% 98%',
    // ... other colors
  }
};

vibeTheme.addTheme(customTheme);
vibeTheme.setTheme('ocean');
```

### Event Handling

```javascript
const vibeTheme = new VibeTheme({
  onThemeChange: (theme) => {
    // Update favicon based on theme
    document.querySelector('link[rel="icon"]').href = 
      theme.name === 'dark' ? '/favicon-dark.ico' : '/favicon-light.ico';
    
    // Update meta theme-color (handled automatically)
    // Analytics tracking
    gtag('event', 'theme_change', { theme_name: theme.name });
  }
});
```

### AI Theme Generation (Advanced)

```javascript
// Custom AI endpoint
const generator = new AIThemeGenerator({
  vibeTheme,
  apiEndpoint: 'https://your-ai-service.com/generate-theme',
  apiKey: 'your-key'
});

// Structured prompt
const theme = await generator.generateTheme({
  name: 'sunset-vibes',
  description: 'Warm sunset colors with orange and pink tones',
  style: 'vibrant',
  mood: 'energetic',
  primaryColor: '30 100% 50%' // Orange hue
});
```

## ♿ Accessibility Features

VibeTheme includes comprehensive accessibility support:

- **Screen Reader Support**: Automatic announcements when themes change
- **Keyboard Navigation**: Full keyboard control with Alt+Arrow keys
- **High Contrast Mode**: Automatic high-contrast theme when `prefers-contrast: high`
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`
- **Focus Management**: Enhanced focus indicators
- **ARIA Attributes**: Proper labeling and roles
- **Skip Links**: Easy navigation for keyboard users

## 📱 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **CSS Custom Properties**: Required for theme switching
- **ES Modules**: Used for imports
- **Media Queries**: `prefers-color-scheme`, `prefers-contrast`, `prefers-reduced-motion`

## 🤝 Like shadcn/ui Components

VibeTheme follows the shadcn/ui philosophy - copy the code directly into your project instead of installing as a dependency:

1. **Copy the source files** from `src/` into your project
2. **Customize as needed** - modify colors, add themes, extend functionality
3. **No version lock-in** - you own the code and can modify it freely
4. **TypeScript ready** - full type definitions included

## 📋 Examples

### Basic Theme Switcher

```html
<div class="theme-switcher">
  <button data-theme="light">☀️ Light</button>
  <button data-theme="dark">🌙 Dark</button>
  <button data-theme="sepia">📜 Sepia</button>
</div>

<script type="module">
  import { VibeTheme } from './src/vibetheme.js';
  
  const vibeTheme = new VibeTheme();
  
  document.querySelectorAll('[data-theme]').forEach(button => {
    button.addEventListener('click', () => {
      vibeTheme.setTheme(button.dataset.theme);
    });
  });
</script>
```

### AI Theme Generator

```html
<div class="ai-generator">
  <input id="prompt" placeholder="Describe your ideal theme...">
  <button id="generate">Generate Theme</button>
</div>

<script type="module">
  import { VibeTheme, AIThemeGenerator } from './src/index.js';
  
  const vibeTheme = new VibeTheme();
  const generator = new AIThemeGenerator({ vibeTheme });
  
  document.getElementById('generate').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;
    const theme = await generator.generateAndApplyTheme(prompt);
    console.log('Generated:', theme.name);
  });
</script>
```

### Custom Theme Builder

```html
<div id="theme-builder"></div>

<script type="module">
  import { VibeTheme, CustomThemeBuilder } from './src/index.js';
  
  const vibeTheme = new VibeTheme();
  const builder = new CustomThemeBuilder({
    container: '#theme-builder',
    vibeTheme,
    enablePreview: true
  });
</script>
```

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 🙏 Acknowledgments

- Inspired by [shadcn/ui](https://ui.shadcn.com/) component philosophy
- Color system compatible with [Tailwind CSS](https://tailwindcss.com/)
- Accessibility guidelines from [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Ready to add dynamic theming to your project?** Copy the source files and start customizing! 🎨
