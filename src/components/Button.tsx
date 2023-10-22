import { ButtonHTMLAttributes, ReactNode, useContext } from "react";
import { ThemeContext } from "../store/Theme/ThemeContext.tsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  const { theme } = useContext(ThemeContext);
  const className = "button-" + theme;

  console.log({ className });
  return <button className={className}>{children}</button>;
}
