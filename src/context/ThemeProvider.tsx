import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type TTheme } from "@/context/ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeState, setThemeState] = useState<TTheme>("system");

  const applyTheme = (themeState: TTheme) => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(themeState);
  };

  const setTheme = (themeState: TTheme) => {
    localStorage.setItem("theme", themeState);
    setThemeState(themeState);
    applyTheme(themeState);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as TTheme | null;
    async function loadTheme(savedTheme: TTheme | null) {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const finalTheme = systemDark ? "dark" : "light";

      //use saveTheme if exist otherwise use finalTheme
      setThemeState(savedTheme ?? finalTheme);
      applyTheme(savedTheme ?? finalTheme);
    }
    loadTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeState, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
