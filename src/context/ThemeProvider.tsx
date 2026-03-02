import { useState, type ReactNode } from "react";
import { ThemeContext, type TTheme } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>("system");
  const setThemeState = (theme: TTheme) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ theme, setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
};
