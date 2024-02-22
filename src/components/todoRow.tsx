import { Delete } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ToDo, ToDoState } from "../data/todo";

type TodoRowProps = {
  todo: ToDo;
  onLatChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
  ) => void;
  onLngChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
  ) => void;
  onStateChange: (event: SelectChangeEvent<ToDoState>, id: string) => void;
  onTitleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
  ) => void;
  onDelete: (id: string) => void;
};

export const TodoRow = ({
  todo,
  onLatChange,
  onLngChange,
  onStateChange,
  onTitleChange,
  onDelete,
}: TodoRowProps) => {
  return (
    <Grid container spacing={1}>
      <Grid item sm={3}>
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
      </Grid>
      <Grid item sm={4}>
        <TextField
          value={todo.title}
          onChange={(event) => {
            onTitleChange(event, todo.id);
          }}
        />
      </Grid>
      <Grid item sm={2} alignSelf="center">
        <TextField
          value={todo.location?.lat}
          onChange={(event) => {
            onLatChange(event, todo.id);
          }}
        />
      </Grid>
      <Grid item sm={2} alignSelf="center">
        <TextField
          value={todo.location?.lng}
          onChange={(event) => {
            onLngChange(event, todo.id);
          }}
        />
      </Grid>
      <Grid item sm={1} alignSelf="center">
        <IconButton
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          <Delete />
        </IconButton>
      </Grid>
    </Grid>
  );
};
