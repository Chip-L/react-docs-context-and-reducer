import { useState } from "react";
import { useTasks, useTasksDispatch } from "../store/Tasks/TaskContext";
import { Button } from "./Button";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  const tasks = useTasks();

  const nextId = tasks.reduce(function (prev, current) {
    return prev && prev.id > current.id ? prev : current;
  }).id;

  const handleAddTask = (text: string) =>
    dispatch &&
    dispatch({
      type: "added",
      id: nextId + 1,
      text: text,
    });

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        name="Add task"
      />
      <Button
        onClick={() => {
          setText("");
          handleAddTask(text);
        }}
      >
        Add
      </Button>
    </>
  );
}
