import { useTheme } from "@store/Theme";
import { ReactNode } from "react";

interface PanelProps {
  title: string;
  children: ReactNode;
}

export function Panel({ title, children }: PanelProps) {
  const { theme } = useTheme();
  const className = "panel-" + theme;

  return (
    <section className={`panel ${className}`}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
