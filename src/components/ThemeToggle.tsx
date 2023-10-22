import { useContext } from "react";
import { ThemeContext } from "../store/Theme/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <label>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      />
      Use dark mode
    </label>
  );
}
