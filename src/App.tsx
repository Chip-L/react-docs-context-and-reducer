import { TasksProvider } from "./store/Tasks/TasksProvider";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { ThemeContextProvider } from "./store/Theme/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import { Panel } from "./components/Panel";

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
