import { PropsWithChildren } from "react";
import { TabsContext } from "./TabsContext";
import useTabsContext from "./useTabsContext";

export const TabsContextProvider = ({ children }: PropsWithChildren) => {
  const tabs = useTabsContext();

  return <TabsContext.Provider value={tabs}>{children}</TabsContext.Provider>;
};
