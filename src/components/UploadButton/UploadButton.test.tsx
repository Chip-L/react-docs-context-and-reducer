import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { UploadButton } from "./UploadButton";
import userEvent from "@testing-library/user-event";

describe("Upload Button", () => {
  it("displays success if valid type is uploaded", async () => {
    const user = userEvent.setup();
    render(<UploadButton currentTemplate={{ fileExtension: "docx" }} />);

    const file = new File(["foo"], "foo.docx");

    const uploadField = screen.getByTestId("fileInput");
    await user.upload(uploadField, file);

    expect(screen.getByText(/success/i)).toBeInTheDocument;
  });

  it("displays error if invalid type is uploaded", async () => {
    render(<UploadButton currentTemplate={{ fileExtension: "docx" }} />);

    const file = new File(["foo"], "foo.xlsx");

    const uploadField = screen.getByTestId("fileInput");
    await waitFor(() =>
      fireEvent.change(uploadField, {
        target: { files: [file] },
      })
    );

    expect(screen.getByText(/error/i)).toBeInTheDocument;
  });
});
