import { PropsWithChildren } from "react";
import { ThemeContext } from "./ThemeContext.tsx";
import useThemeContext from "./useThemeContext.ts";

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const theme = useThemeContext("dark");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
