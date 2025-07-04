import type { VarTypes } from "./vibetheme.config.ts";

/**
 * Predefined VibeTheme themes
 * Users can import these or create their own following the same structure
 */

export interface Theme {
    name: string;
    vars: VarTypes;
}

export const lightTheme: Theme = {
    name: "light",
    vars: {
        background: "0 0% 100%",
        foreground: "222.2 84% 4.9%",
        primary: "221.2 83.2% 53.3%",
        "primary-foreground": "210 40% 98%",
        secondary: "210 40% 96%",
        "secondary-foreground": "222.2 84% 4.9%",
        muted: "210 40% 96%",
        "muted-foreground": "215.4 16.3% 46.9%",
        accent: "210 40% 96%",
        "accent-foreground": "222.2 84% 4.9%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "210 40% 98%",
        border: "214.3 31.8% 91.4%",
        input: "214.3 31.8% 91.4%",
        ring: "221.2 83.2% 53.3%",
        card: "0 0% 100%",
        "card-foreground": "222.2 84% 4.9%",
        popover: "0 0% 100%",
        "popover-foreground": "222.2 84% 4.9%",
    },
};

export const darkTheme: Theme = {
    name: "dark",
    vars: {
        background: "222.2 84% 4.9%",
        foreground: "210 40% 98%",
        primary: "217.2 91.2% 59.8%",
        "primary-foreground": "222.2 84% 4.9%",
        secondary: "217.2 32.6% 17.5%",
        "secondary-foreground": "210 40% 98%",
        muted: "217.2 32.6% 17.5%",
        "muted-foreground": "215 20.2% 65.1%",
        accent: "217.2 32.6% 17.5%",
        "accent-foreground": "210 40% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "210 40% 98%",
        border: "217.2 32.6% 17.5%",
        input: "217.2 32.6% 17.5%",
        ring: "224.3 76.3% 94.1%",
        card: "222.2 84% 4.9%",
        "card-foreground": "210 40% 98%",
        popover: "222.2 84% 4.9%",
        "popover-foreground": "210 40% 98%",
    },
};

export const sepiaTheme: Theme = {
    name: "sepia",
    vars: {
        background: "30 54% 90%",
        foreground: "30 25% 15%",
        primary: "25 80% 45%",
        "primary-foreground": "30 54% 90%",
        secondary: "30 30% 80%",
        "secondary-foreground": "30 25% 15%",
        muted: "30 30% 85%",
        "muted-foreground": "30 20% 40%",
        accent: "35 40% 75%",
        "accent-foreground": "30 25% 15%",
        destructive: "0 70% 50%",
        "destructive-foreground": "30 54% 90%",
        border: "30 25% 75%",
        input: "30 25% 75%",
        ring: "25 80% 45%",
        card: "30 45% 88%",
        "card-foreground": "30 25% 15%",
        popover: "30 45% 88%",
        "popover-foreground": "30 25% 15%",
    },
};

export const oceanTheme: Theme = {
    name: "ocean",
    vars: {
        background: "200 20% 98%",
        foreground: "200 50% 10%",
        primary: "195 100% 50%",
        "primary-foreground": "200 20% 98%",
        secondary: "195 30% 90%",
        "secondary-foreground": "200 50% 10%",
        muted: "195 20% 92%",
        "muted-foreground": "200 25% 45%",
        accent: "190 40% 85%",
        "accent-foreground": "200 50% 10%",
        destructive: "0 70% 50%",
        "destructive-foreground": "200 20% 98%",
        border: "195 25% 80%",
        input: "195 25% 80%",
        ring: "195 100% 50%",
        card: "195 25% 96%",
        "card-foreground": "200 50% 10%",
        popover: "195 25% 96%",
        "popover-foreground": "200 50% 10%",
    },
};

export const forestTheme: Theme = {
    name: "forest",
    vars: {
        background: "120 20% 97%",
        foreground: "120 30% 15%",
        primary: "120 60% 40%",
        "primary-foreground": "120 20% 97%",
        secondary: "120 20% 88%",
        "secondary-foreground": "120 30% 15%",
        muted: "120 15% 92%",
        "muted-foreground": "120 20% 50%",
        accent: "115 25% 85%",
        "accent-foreground": "120 30% 15%",
        destructive: "0 70% 50%",
        "destructive-foreground": "120 20% 97%",
        border: "120 20% 82%",
        input: "120 20% 82%",
        ring: "120 60% 40%",
        card: "120 18% 95%",
        "card-foreground": "120 30% 15%",
        popover: "120 18% 95%",
        "popover-foreground": "120 30% 15%",
    },
};

export const sunsetTheme: Theme = {
    name: "sunset",
    vars: {
        background: "20 40% 96%",
        foreground: "20 50% 15%",
        primary: "15 80% 55%",
        "primary-foreground": "20 40% 96%",
        secondary: "25 30% 88%",
        "secondary-foreground": "20 50% 15%",
        muted: "20 25% 90%",
        "muted-foreground": "20 30% 45%",
        accent: "30 40% 82%",
        "accent-foreground": "20 50% 15%",
        destructive: "0 70% 50%",
        "destructive-foreground": "20 40% 96%",
        border: "25 25% 80%",
        input: "25 25% 80%",
        ring: "15 80% 55%",
        card: "22 30% 94%",
        "card-foreground": "20 50% 15%",
        popover: "22 30% 94%",
        "popover-foreground": "20 50% 15%",
    },
};

export const highContrastTheme: Theme = {
    name: "high-contrast",
    vars: {
        background: "0 0% 100%",
        foreground: "0 0% 0%",
        primary: "0 0% 0%",
        "primary-foreground": "0 0% 100%",
        secondary: "0 0% 90%",
        "secondary-foreground": "0 0% 0%",
        muted: "0 0% 95%",
        "muted-foreground": "0 0% 20%",
        accent: "0 0% 85%",
        "accent-foreground": "0 0% 0%",
        destructive: "0 100% 40%",
        "destructive-foreground": "0 0% 100%",
        border: "0 0% 0%",
        input: "0 0% 0%",
        ring: "0 0% 0%",
        card: "0 0% 100%",
        "card-foreground": "0 0% 0%",
        popover: "0 0% 100%",
        "popover-foreground": "0 0% 0%",
    },
};

/**
 * Collection of all predefined themes
 * Users can import this to get all themes at once
 */
const themes: Theme[] = [
    lightTheme,
    darkTheme,
    sepiaTheme,
    oceanTheme,
    forestTheme,
    sunsetTheme,
    highContrastTheme,
];

export default themes;
