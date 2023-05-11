import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

import { initAppClient } from '../../../services/app.http.interceptor';

export const ApiClientInit = ({ children }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initAppClient()
      .then(() => setLoading(false))
      .catch(console.error);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          height: '97vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return children;
};
