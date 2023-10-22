import { useTheme } from "@store/Theme";
import { ReactNode } from "react";

export function Panel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const { theme } = useTheme();
  const className = "panel-" + theme;
  return (
    <section className={`panel ${className}`}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
