import { Delete } from "@mui/icons-material";
import { Grid, IconButton, MenuItem, Select, TextField } from "@mui/material";
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
    <Grid container spacing={1}>
      <Grid item sm={4}>
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
      <Grid item sm={6}>
        <TextField
          value={todo.title}
          onChange={(event) => {
            onTitleChange(event, todo.id);
          }}
        />
      </Grid>
      <Grid item sm={2} alignSelf="center">
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
