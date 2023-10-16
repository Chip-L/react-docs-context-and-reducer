import { PropsWithChildren, useReducer } from "react";
import { tasksReducer } from "./tasksReducer";
import { TasksContext, TasksDispatchContext } from "./TaskContext";

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink macho", done: false },
];

export function TasksProvider({ children }: PropsWithChildren) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
