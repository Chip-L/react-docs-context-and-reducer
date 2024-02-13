import { Page } from "@components/Page";
import { TasksProvider } from "@store/Tasks";
import { ThemeContextProvider } from "@store/Theme";

export default function App() {
  return (
    <ThemeContextProvider>
      <TasksProvider>
        <Page />
      </TasksProvider>
    </ThemeContextProvider>
  );
}
