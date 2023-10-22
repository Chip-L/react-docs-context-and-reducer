import { PropsWithChildren } from "react";
import useTheme from "../hooks/useTheme.ts";

export function Button({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
