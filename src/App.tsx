import AddTask from "./components/AddTask";
import { Panel } from "./components/Panel";
import TaskList from "./components/TaskList";
import { ThemeToggle } from "./components/ThemeToggle";
import { TasksProvider } from "./store/Tasks/TasksProvider";
import { ThemeContextProvider } from "./store/Theme";

export default function TaskApp() {
  return (
    <ThemeContextProvider>
      <TasksProvider>
        <Panel title="Day off in Kyoto">
          <AddTask />
          <TaskList />
        </Panel>
        <ThemeToggle />
      </TasksProvider>
    </ThemeContextProvider>
  );
}
