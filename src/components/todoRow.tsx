import { Delete } from "@mui/icons-material";
import {
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { ToDo, ToDoState } from "../data/todo";

type TodoRowProps = {
  todo: ToDo;
  onStateChange: any;
  onTitleChange: any;
  onDelete: any;
};

export const TodoRow = ({
  todo,
  onStateChange,
  onTitleChange,
  onDelete,
}: TodoRowProps) => {
  return (
    <Stack direction="row">
      <InputLabel>State</InputLabel>
      <Select
        value={todo.state}
        onChange={(event) => {
          onStateChange(event, todo.id);
        }}
      >
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
  );
};
