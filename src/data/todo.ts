export enum ToDoState {
  todo = "todo",
  scheduled = "scheduled",
  done = "done",
}

export type Location = {
  lat: number;
  lng: number;
};

export type ToDo = {
  id: string;
  title: string;
  state: ToDoState;
  location?: Location;
};

export const initialTodos: ToDo[] = [
  {
    id: "1",
    title: "Write Test",
    state: ToDoState.todo,
    location: {
      lat: -42.5318,
      lng: 171.5667,
    },
  },
  {
    id: "2",
    title: "Write Component",
    state: ToDoState.done,

    location: {
      lat: -42.5317,
      lng: 171.5661,
    },
  },
  {
    id: "3",
    title: "Mow Lawn",
    state: ToDoState.scheduled,
    location: {
      lat: -43.5312,
      lng: 172.56693,
    },
  },
  {
    id: "4",
    title: "Cut tree",
    state: ToDoState.scheduled,
    location: {
      lat: -43.5318,
      lng: 172.5667,
    },
  },
  {
    id: "5",
    title: "Trim Hedge",
    state: ToDoState.scheduled,

    location: {
      lat: -43.5317,
      lng: 172.5661,
    },
  },
];
