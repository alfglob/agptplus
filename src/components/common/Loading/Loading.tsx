import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

export const Loading = ({ size = 60 }: any) => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    sx={{
      height: ' 100vh',
      background: 'rgba(0,0,0,0.8)',
      zIndex: '1500',
      position: 'absolute',
    }}
  >
    <CircularProgress size={size} />
  </Grid>
);
