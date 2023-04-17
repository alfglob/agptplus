import { Box } from '@mui/material';

export const ErrorAlert = ({ message }: any) => (
  <Box
    sx={{
      color: '#d32f2f',
      padding: '0 24px',
      fontSize: '14px',
      top: '-10px',
      zIndex: '1250',
      position: 'absolute',
    }}
  >
    {message}
  </Box>
);
