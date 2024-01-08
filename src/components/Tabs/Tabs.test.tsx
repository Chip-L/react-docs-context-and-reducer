import * as Panel from "@components/Panel";
import { TabsContext } from "@store/Tabs";
import useTabsContext from "@store/Tabs/useTabsContext";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TabsContextType } from "types/TabsContext";
import { Tabs } from "./Tabs";

vi.spyOn(Panel, "Panel")
  .mockName("panelSpy")
  .mockImplementation(() => <div>panel</div>);

const renderWithProviders = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: Partial<TabsContextType>
) => {
  const initTabs = useTabsContext(options?.activeIndex ?? 0);
  console.log({ initTabs });
  const tabs = { ...initTabs, options };
  return render(<TabsContext.Provider value={tabs}>{ui}</TabsContext.Provider>);
};

describe("Tabs", () => {
  it("shows tabs", async () => {
    renderWithProviders(<Tabs />);

    const tabs = screen.getAllByRole("tab");

    expect(tabs).toHaveLength(2);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");

    await userEvent.click(tabs[1]);

    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
  });
});
