import { createContext } from "react";
export type TTheme = "light" | "dark" | "system";
export type TThemeContextType = {
  theme: TTheme;
  setThemeState: (theme: TTheme) => void;
};
export const ThemeContext = createContext<TThemeContextType | null>(null);

/**
Steps in creating context
1. createContext - this will allow us to create a context that we use to wrap our children in our ComponentProvider
   const ThemeContext = createContext<TThemeContextType | null>(null);
   all children can access the context we provide here
2. create ThemeProvider - this will hold the two things:
  2.1 contextState - the context we consume in the app / so when the state changes all children components rerender
  2.2 children - the components that consume the context
3. Create custom hook - so we dont need to import themeContext everytime we need the context
4. Wrap our App to the ThemeProvider
5. functions that updates the context.
eg. localStorage manipulation and something something
*/
