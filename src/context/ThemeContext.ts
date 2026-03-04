import { createContext } from "react";
export type TTheme = "light" | "dark" | "system";
export type TThemeContextType = {
  themeState: TTheme;
  setTheme: (themeState: TTheme) => void;
};
export const ThemeContext = createContext<TThemeContextType | null>(null);
