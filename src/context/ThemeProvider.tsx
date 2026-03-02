import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type TTheme } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeState, setThemeState] = useState<TTheme>("system");

  const applyTheme = (themeState: TTheme) => {
    const root = document.documentElement;

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // nested ternary operator
    const finalTheme: TTheme =
      themeState === "system" ? (systemDark ? "dark" : "light") : themeState;

    root.classList.remove("light", "dark");
    root.classList.add(finalTheme);
  };

  const setTheme = (themeState: TTheme) => {
    localStorage.setItem("theme", themeState);
    setThemeState(themeState);
    applyTheme(themeState);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as TTheme | null;
    if (savedTheme) {
      async function loadTheme(savedTheme: TTheme) {
        setThemeState(savedTheme);
        applyTheme(savedTheme);
      }
      loadTheme(savedTheme);
    } else {
      applyTheme("system");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeState, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
