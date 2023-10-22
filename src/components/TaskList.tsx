import { useTasks } from "@store/Tasks";
import { Task } from "./Task";

export function TaskList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks?.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
