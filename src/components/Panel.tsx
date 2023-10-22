import { ReactNode, useContext } from "react";
import { ThemeContext } from "../store/Theme/ThemeContext.tsx";

export function Panel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const { theme } = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={`panel ${className}`}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
