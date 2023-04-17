import { Box } from '@mui/material';

export const DotsLoading = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',

      '& > div': {
        width: '10px',
        height: '10px',
        margin: '3px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: 1,
        animation: 'bouncing-loader 0.6s infinite alternate',
      },
      '@keyframes bouncing-loader': {
        to: {
          opacity: ' 0.2',
        },
      },

      '& > div:nth-of-type(2)': {
        animationDelay: '0.2s',
      },

      '& > div:nth-of-type(3)': {
        animationDelay: '0.4s',
      },
    }}
  >
    <div />
    <div />
    <div />
  </Box>
);
