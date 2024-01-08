import { AddTask } from "@components/AddTask";
import { Panel } from "@components/Panel";
import { TaskList } from "@components/TaskList";
import { Tabs as PFTabs, Tab, TabTitleText } from "@patternfly/react-core";
import { TabsContext } from "@store/Tabs";
import { useContext } from "react";
import { TabsContextType } from "types/TabsContext";

export function Tabs() {
  const { activeIndex: activeTabKey, setTabIndex: setActiveTab } = useContext(
    TabsContext
  ) as TabsContextType;

  const handleTabClick = (
    _event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    const tabIndexNumber = typeof tabIndex === "string" ? +tabIndex : tabIndex;

    console.log("Tabs:", { tabIndex });

    setActiveTab(tabIndexNumber);
  };

  const title = "Day off in Kyoto";

  return (
    <div>
      <PFTabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        aria-label="Tabs in the default example"
        role="region"
      >
        <Tab
          eventKey={0}
          title={<TabTitleText>{title}</TabTitleText>}
          aria-label={`${title} tab`}
        >
          <Panel title={title}>
            <AddTask />
            <TaskList />
          </Panel>
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
          Containers
        </Tab>
      </PFTabs>
    </div>
  );
}
