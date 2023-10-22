import { Theme } from "./Theme.tsx";

export interface ThemeContext {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}
