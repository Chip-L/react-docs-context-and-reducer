import { ITask } from "../types";

type AddedTask = {
  type: "added";
  id: number;
  text: string;
};
type ChangedTask = {
  type: "changed";
  task: ITask;
};
type DeletedTask = {
  type: "deleted";
  id: number;
};

export type TaskReducerActions = AddedTask | ChangedTask | DeletedTask;

export function tasksReducer(tasks: ITask[], action: TaskReducerActions) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      const _exhaustiveCheck: never = action;
      throw Error("Unknown action: " + _exhaustiveCheck);
    }
  }
}
