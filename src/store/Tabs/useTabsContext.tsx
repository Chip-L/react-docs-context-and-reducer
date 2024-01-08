import { useState } from "react";
import { TabsContextType } from "types/TabsContext";

const useTabsContext = (initialIndex?: number): TabsContextType => {
  const [activeIndex, setActiveTab] = useState(initialIndex ?? 0);

  const setTabIndex = (index: number) => {
    console.log("TabsContextProvider");
    setActiveTab(index);
  };

  return {
    activeIndex,
    setTabIndex,
  };
};

export default useTabsContext;
