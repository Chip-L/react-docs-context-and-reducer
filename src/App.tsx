import { Page } from "@components/Page";
import "@patternfly/react-core/dist/styles/base.css";
import { TabsContextProvider } from "@store/Tabs";
import { TasksProvider } from "@store/Tasks";
import { ThemeContextProvider } from "@store/Theme";

export default function App() {
  return (
    <ThemeContextProvider>
      <TabsContextProvider>
        <TasksProvider>
          <Page />
        </TasksProvider>
      </TabsContextProvider>
    </ThemeContextProvider>
  );
}
