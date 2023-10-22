import { ReactNode } from "react";
import { useTheme } from "../hooks/useTheme.ts";

interface ButtonProps {
  onClick: () => void;
  children?: ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  const { theme } = useTheme();
  const className = "button-" + theme;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
