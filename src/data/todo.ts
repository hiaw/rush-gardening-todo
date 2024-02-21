export enum ToDoState {
  todo = "todo",
  scheduled = "scheduled",
  done = "done",
}

type Location = {
  lat: number;
  lng: number;
};

export type ToDo = {
  id: string;
  title: string;
  state: ToDoState;
  location?: Location;
};