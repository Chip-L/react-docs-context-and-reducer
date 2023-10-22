import { createContext, useContext } from "react";
import { ITask } from "../../types";
import { TaskReducerActions } from "./tasksReducer";

export const TasksContext = createContext<ITask[]>([]);
export function useTasks() {
  return useContext(TasksContext);
}

export const TasksDispatchContext =
  createContext<React.Dispatch<TaskReducerActions> | null>(null);
export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
