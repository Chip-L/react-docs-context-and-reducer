import { useState } from "react";
import { useTasksDispatch } from "../store/Tasks/TaskContext";
import { ITask } from "../types";
import { Button } from "./Button";

export interface TaskProps {
  task: ITask;
}

export function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;

  function handleChangeTask(task: ITask) {
    dispatch &&
      dispatch({
        type: "changed",
        task: task,
      });
  }

  function handleDeleteTask(taskId: number) {
    dispatch &&
      dispatch({
        type: "deleted",
        id: taskId,
      });
  }

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            handleChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
          name={`${task.id}change`}
        />
        <Button onClick={() => setIsEditing(false)}>Save</Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          handleChangeTask({
            ...task,
            done: e.target.checked,
          });
        }}
        name={`${task.id}cb`}
      />
      {task.id} {taskContent}
      <Button onClick={() => handleDeleteTask(task.id)}>Delete</Button>
    </label>
  );
}
