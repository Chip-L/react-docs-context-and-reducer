import { ReactNode, useContext } from "react";
import { ThemeContext } from "../store/Theme/ThemeContext.tsx";

interface ButtonProps {
  onClick: () => void;
  children?: ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  const { theme } = useContext(ThemeContext);
  const className = "button-" + theme;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
