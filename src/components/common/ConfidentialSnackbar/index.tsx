import { Alert, Snackbar } from '@mui/material';
import { connect } from 'react-redux';

import { labels } from '../../../assets/locale/en';

import { mapDispatchToProps, mapStateToProps } from '../../../store';

export const ConfidentialSnackbarComponent = ({ isConfidentialAccept, acceptConfidential }: any) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    acceptConfidential();
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

export const ConfidentialSnackbar = connect(mapStateToProps, mapDispatchToProps)(ConfidentialSnackbarComponent);
