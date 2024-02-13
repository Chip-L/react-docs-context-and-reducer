import { Tabs } from "@components/Tabs";
import { ThemeToggle } from "@components/ThemeToggle";
import { UploadButton } from "@components/UploadButton";

export function Page() {
  return (
    <>
      <UploadButton currentTemplate={{ fileExtension: "docx" }} />
      <Tabs />
      <ThemeToggle />
    </>
  );
}
