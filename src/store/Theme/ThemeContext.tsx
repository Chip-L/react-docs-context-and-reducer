import { PropsWithChildren, createContext } from "react";
import useTheme from "../../hooks/useTheme.ts";
import { ThemeContext as ThemeContextType } from "../../types/ThemeContext.tsx";

const noop = (..._args: any[]) => {};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: noop,
});

// export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
//   const theme = useTheme("light");

//   return (
//     <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
//   );
// };
