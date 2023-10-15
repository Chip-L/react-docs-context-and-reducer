import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

// Tests
describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    render(<App />);
    const h1 = await screen.queryByText("Vite + React");

    expect(h1).toBeInTheDocument();
  });

  it("Should show the button count set to 0", async () => {
    await render(<App />);
    const button = await screen.queryByText("count is 0");

    expect(button).not.toBeNull();
  });

  it("Should show the button count set to 3", async () => {
    const user = userEvent.setup();
    await render(<App />);
    const button = await screen.queryByText("count is 0");

    expect(button).not.toBeNull();

    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);

    expect(button?.innerHTML).toBe("count is 3");
  });
});
