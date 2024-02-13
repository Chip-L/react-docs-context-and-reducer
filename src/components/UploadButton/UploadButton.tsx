import { useRef, useState } from "react";

type templateType = {
  fileExtension: "docx" | "xlsx";
};

interface UploadButtonProps {
  currentTemplate: templateType;
}

export function UploadButton({ currentTemplate }: UploadButtonProps) {
  const [message, setMessage] = useState("");

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const fileHasError = (ext: string, template: templateType) => {
    if (ext !== template.fileExtension) {
      setMessage(`Error: Wrong file type: .${ext}`);
      return true;
    }
    return false;
  };

  const handleClick = () => {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  const handleUpload = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const file = target.files ? target.files[0] : undefined;

    if (!file) return;
    //
    console.log("file:", file.name);
    //

    const extension = (file?.name).split(".").pop() ?? "";

    if (!fileHasError(extension, currentTemplate)) {
      setMessage(`Success: use file: ${file.name}`);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Upload a file</button>
      {message && <p>{message}</p>}

      <input
        type="file"
        accept={`.${currentTemplate.fileExtension}`}
        onChange={handleUpload}
        ref={hiddenFileInput}
        style={{ display: "none" }}
        data-testid="fileInput"
      />
    </div>
  );
}
