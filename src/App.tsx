import {
  Box,
  Button,
  Container,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TodoHeader } from "./components/todoHeader";
import { TodoMap } from "./components/todoMap";
import { TodoRow } from "./components/todoRow";
import { initialTodos, ToDoState } from "./data/todo";

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const onAdd = () => {
    const newTodos = [...todos];
    newTodos.push({
      id: Math.random().toString(),
      title: "",
      state: ToDoState.todo,
    });
    setTodos(newTodos);
  };

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

  const onLatChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
  ) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.location = {
          lat: Number(event.target.value),
          lng: todo.location?.lng || 0,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const onLngChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
  ) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.location = {
          lat: todo.location?.lat || 0,
          lng: Number(event.target.value),
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const onStateChange = (event: SelectChangeEvent<ToDoState>, id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.state = ToDoState[event.target.value as keyof typeof ToDoState];
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <Container maxWidth="md">
      <Box border="solid" m={2} p={2}>
        <Typography variant="h4" textAlign="center">
          Rush Gardening To Do App
        </Typography>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <TodoHeader />
            {todos.map((todo) => (
              <TodoRow
                todo={todo}
                onDelete={onDelete}
                onLatChange={onLatChange}
                onLngChange={onLngChange}
                onStateChange={onStateChange}
                onTitleChange={onTitleChange}
              />
            ))}
          </Stack>
          <Button variant="outlined" onClick={onAdd}>
            Add To Do
          </Button>
          <TodoMap todos={todos} />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
