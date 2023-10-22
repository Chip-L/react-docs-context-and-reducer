import { createContext } from "react";
import { ThemeContext as ThemeContextType } from "../../types/ThemeContext.tsx";

const noop = (..._args: any[]) => {};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: noop,
});
