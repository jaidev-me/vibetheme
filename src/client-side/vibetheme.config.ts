export interface VarTypes {
  background: string;
  foreground: string;
  primary: string;
  "primary-foreground": string;
  secondary: string;
  "secondary-foreground": string;
  muted: string;
  "muted-foreground": string;
  accent: string;
  "accent-foreground": string;
  destructive: string;
  "destructive-foreground": string;
  border: string;
  input: string;
  ring: string;
  card: string;
  "card-foreground": string;
  popover: string;
  "popover-foreground": string;
}

export interface ThemeVarConfig {
    name: string;
    var: keyof VarTypes;
    aiDescription?: string;
}

/**
 * Default VibeTheme variable configuration
 * Users can copy and customize this for their own design system
 */
const defaultThemeConfig: ThemeVarConfig[] = [
    {
        name: "Background",
        var: "background",
        aiDescription:
            "Main background color of the application, should be light in light themes and dark in dark themes",
    },
    {
        name: "Foreground",
        var: "foreground",
        aiDescription:
            "Primary text color, should have high contrast with background for readability",
    },
    {
        name: "Primary",
        var: "primary",
        aiDescription:
            "Primary brand color used for main actions, buttons, and highlights",
    },
    {
        name: "Primary Text",
        var: "primary-foreground",
        aiDescription:
            "Text color that appears on primary colored backgrounds, should contrast well with primary color",
    },
    {
        name: "Secondary",
        var: "secondary",
        aiDescription:
            "Secondary accent color for less prominent elements and backgrounds",
    },
    {
        name: "Secondary Text",
        var: "secondary-foreground",
        aiDescription: "Text color for secondary colored backgrounds",
    },
    {
        name: "Muted Background",
        var: "muted",
        aiDescription:
            "Subtle background color for cards, sections, and quiet areas",
    },
    {
        name: "Muted Text",
        var: "muted-foreground",
        aiDescription:
            "Subdued text color for less important information and descriptions",
    },
    {
        name: "Accent Background",
        var: "accent",
        aiDescription:
            "Accent background color for hover states and highlighted elements",
    },
    {
        name: "Accent Text",
        var: "accent-foreground",
        aiDescription: "Text color for accent colored backgrounds",
    },
    {
        name: "Destructive",
        var: "destructive",
        aiDescription:
            "Error, danger, or warning color for destructive actions and alerts",
    },
    {
        name: "Destructive Text",
        var: "destructive-foreground",
        aiDescription:
            "Text color that appears on destructive colored backgrounds",
    },
    {
        name: "Border",
        var: "border",
        aiDescription:
            "Color for borders, dividers, and outlines throughout the interface",
    },
    {
        name: "Input Border",
        var: "input",
        aiDescription:
            "Border color specifically for form inputs and interactive elements",
    },
    {
        name: "Focus Ring",
        var: "ring",
        aiDescription: "Color for focus indicators and accessibility outlines",
    },
    {
        name: "Card Background",
        var: "card",
        aiDescription:
            "Background color for cards, panels, and elevated surfaces",
    },
    {
        name: "Card Text",
        var: "card-foreground",
        aiDescription: "Text color for content on card backgrounds",
    },
    {
        name: "Popover Background",
        var: "popover",
        aiDescription:
            "Background color for popovers, tooltips, and floating elements",
    },
    {
        name: "Popover Text",
        var: "popover-foreground",
        aiDescription: "Text color for content in popovers and tooltips",
    },
] as const;






export default defaultThemeConfig;

