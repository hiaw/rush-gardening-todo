import { Button, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { TodoRow } from "./components/todoRow";
import { ToDo, ToDoState } from "./data/todo";

const initialTodos: ToDo[] = [
  { id: "1", title: "Write Test", state: ToDoState.todo },
  { id: "2", title: "Write Component", state: ToDoState.scheduled },
  { id: "3", title: "Test Component", state: ToDoState.done },
];

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
    <>
      {todos.map((todo) => (
        <TodoRow
          todo={todo}
          onDelete={onDelete}
          onStateChange={onStateChange}
          onTitleChange={onTitleChange}
        />
      ))}
      <Button onClick={onAdd}>Add To Do</Button>
    </>
  );
}

export default App;
