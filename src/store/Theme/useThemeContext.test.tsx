import { act, renderHook } from "@testing-library/react";
import useThemeContext from "./useThemeContext";

test("should use theme", () => {
  const { result } = renderHook(() => useThemeContext());

  expect(result.current.theme).toBe("light");
  expect(typeof result.current.setTheme).toBe("function");
});

test("should set theme", () => {
  const { result } = renderHook(() => useThemeContext());

  act(() => {
    result.current.setTheme("dark");
  });

  expect(result.current.theme).toBe("dark");
});

// This is an unnecessary test, it is being used to demonstrate props
test("should set theme", () => {
  const { result } = renderHook(() => useThemeContext("dark"));

  act(() => {
    result.current.setTheme("light");
  });

  expect(result.current.theme).toBe("light");
});
