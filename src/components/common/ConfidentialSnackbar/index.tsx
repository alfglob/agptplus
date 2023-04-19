import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';

import { labels } from '../../../assets/locale/en';

export const ConfidentialSnackbarComponent = () => {
  const [isConfidentialAccept, setConfidentialAccept] = useState(localStorage.getItem('confidential_acc') === 'true');
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    localStorage.setItem('confidential_acc', 'true');
    setConfidentialAccept(true);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!isConfidentialAccept}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant="filled" severity="warning" sx={{ width: '100%' }}>
        {labels.confidentialWarning}
      </Alert>
    </Snackbar>
  );
};

export const ConfidentialSnackbar = connect()(ConfidentialSnackbarComponent);
