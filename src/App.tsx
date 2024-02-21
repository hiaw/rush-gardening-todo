import { Delete } from "@mui/icons-material";
import {
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ToDo, ToDoState } from "./data/todo";

const initialTodos: ToDo[] = [
  { id: "1", title: "Write Test", state: ToDoState.todo },
  { id: "2", title: "Write Component", state: ToDoState.scheduled },
  { id: "3", title: "Test Component", state: ToDoState.done },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const onDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onTitleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
  ) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = event.target.value;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <>
      {todos.map((todo) => (
        <Stack direction="row">
          <InputLabel>State</InputLabel>
          <Select value={todo.state}>
            <MenuItem value={ToDoState.todo}>To Do</MenuItem>
            <MenuItem value={ToDoState.scheduled}>Scheduled</MenuItem>
            <MenuItem value={ToDoState.done}>Done</MenuItem>
          </Select>
          <TextField
            value={todo.title}
            onChange={(event) => {
              onTitleChange(event, todo.id);
            }}
          />
          <IconButton
            onClick={() => {
              onDelete(todo.id);
            }}
          >
            <Delete />
          </IconButton>
        </Stack>
      ))}
    </>
  );
}

export default App;
