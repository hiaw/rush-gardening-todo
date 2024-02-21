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
      lat: -43.53171844691778,
      lng: 172.5660234539841,
    },
  },
  {
    id: "2",
    title: "Write Component",
    state: ToDoState.scheduled,

    location: {
      lat: -43.531718446,
      lng: 172.5660234539,
    },
  },
  {
    id: "3",
    title: "Test Component",
    state: ToDoState.done,
    location: {
      lat: -43.5312,
      lng: 172.5663,
    },
  },
];
