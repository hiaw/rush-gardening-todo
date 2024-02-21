import { Grid } from "@mui/material";

export const TodoHeader = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        State
      </Grid>
      <Grid item xs={6}>
        Title
      </Grid>
    </Grid>
  );
};
