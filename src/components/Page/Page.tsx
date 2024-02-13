import { AddTask } from "@components/AddTask";
import { Panel } from "@components/Panel";
import { TaskList } from "@components/TaskList";
import { ThemeToggle } from "@components/ThemeToggle";
import { UploadButton } from "@components/UploadButton";

export function Page() {
  return (
    <>
      <UploadButton currentTemplate={{ fileExtension: "docx" }} />
      <Panel title="Day off in Kyoto">
        <AddTask />
        <TaskList />
      </Panel>
      <ThemeToggle />
    </>
  );
}
