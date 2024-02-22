import { Grid } from "@mui/material";

export const TodoHeader = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        State
      </Grid>
      <Grid item xs={4}>
        Title
      </Grid>
      <Grid item xs={2}>
        Latitude
      </Grid>
      <Grid item xs={2}>
        Longitute
      </Grid>
    </Grid>
  );
};
