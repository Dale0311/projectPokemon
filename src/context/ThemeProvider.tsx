import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type TTheme } from "@/context/ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeState, setThemeState] = useState<TTheme>("system");

  const applyTheme = (theme: TTheme) => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      root.classList.add(systemDark ? "dark" : "light");
    } else {
      root.classList.add(theme);
    }
  };

  const setTheme = (theme: TTheme) => {
    localStorage.setItem("theme", theme);
    setThemeState(theme);
    applyTheme(theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as TTheme | null;
    const theme = savedTheme ?? "system";
    function loadTheme() {
      setThemeState(theme);
      applyTheme(theme);
    }
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeState, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
