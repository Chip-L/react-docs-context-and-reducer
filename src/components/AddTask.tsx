import { useState } from "react";
import { useTasks, useTasksDispatch } from "../store/TaskContext";

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
      <button
        onClick={() => {
          setText("");
          handleAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
