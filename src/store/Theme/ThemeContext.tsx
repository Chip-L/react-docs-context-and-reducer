import { createContext } from "react";
import { ThemeContext as ThemeContextType } from "../../types/ThemeContext.tsx";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});
