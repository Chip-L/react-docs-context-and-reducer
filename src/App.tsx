import AddTask from "./components/AddTask";
import { Panel } from "./components/Panel";
import TaskList from "./components/TaskList";
import { ThemeToggle } from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";
import { TasksProvider } from "./store/Tasks/TasksProvider";
import { ThemeContext } from "./store/Theme/ThemeContext";

export default function TaskApp() {
  const theme = useTheme("light");

  return (
    <ThemeContext.Provider value={theme}>
      <TasksProvider>
        <Panel title="Day off in Kyoto">
          <AddTask />
          <TaskList />
        </Panel>
        <ThemeToggle />
      </TasksProvider>
    </ThemeContext.Provider>
  );
}
