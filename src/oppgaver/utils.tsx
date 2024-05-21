import { Todo } from "../types";

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const defaultTodos: Array<Todo> = [
    {
      id: 1,
      title: "Clean the bathroom",
      completed: false,
    },
    {
      id: 2,
      title: "Wash the windows",
      completed: false,
    },
    {
      id: 3,
      title: "Pet the cat",
      completed: true,
    },
  ];
  