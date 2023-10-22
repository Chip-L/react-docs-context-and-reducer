import { useState } from "react";
import { Theme, ThemeContext } from "../types";

const useTheme = (initialTheme?: Theme): ThemeContext => {
  const [theme, setThemeState] = useState<Theme>(initialTheme ?? "light");

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return {
    theme,
    setTheme,
  };
};

export default useTheme;
