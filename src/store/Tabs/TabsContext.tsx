import { createContext } from "react";
import { TabsContextType } from "types/TabsContext";

const defaultValues: TabsContextType = {
  activeIndex: 0,
  setTabIndex: () => {
    console.log("defaultValues");
    return;
  },
};

export const TabsContext = createContext<TabsContextType>(defaultValues);
