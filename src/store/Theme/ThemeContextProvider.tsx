import { PropsWithChildren, ReactNode } from "react";
import { ThemeContext } from "./ThemeContext.tsx";
import useThemeContext from "./useThemeContext.ts";
import { ThemeContext as ThemeContextType } from "@types";

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const theme = useThemeContext("dark");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

/************************************************/

interface MockThemeContextProviderProps {
  children: ReactNode;
  theme?: ThemeContextType;
}

export const MockThemeContextProvider = ({
  children,
  theme,
}: MockThemeContextProviderProps) => {
  const themeValue = theme ?? {
    theme: "dark",
    setTheme: () => {},
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};
