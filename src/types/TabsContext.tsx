type ITab = number;

export interface TabsContextType {
  activeIndex: ITab;
  setTabIndex: (activeIndex: number) => void;
}
