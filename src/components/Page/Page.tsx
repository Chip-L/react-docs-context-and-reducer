import { AddTask } from "@components/AddTask";
import { Panel } from "@components/Panel";
import { TaskList } from "@components/TaskList";
import { ThemeToggle } from "@components/ThemeToggle";

export function Page() {
  return (
    <>
      <Panel title="Day off in Kyoto">
        <AddTask />
        <TaskList />
      </Panel>
      <ThemeToggle />
    </>
  );
}
