import { Close } from '@mui/icons-material';
import { Box, IconButton, Paper, Slide } from '@mui/material';
import { connect } from 'react-redux';

import { labels } from '../../../assets/locale/en';
import { mapStateToProps } from '../../../store';

export const EpicKDIComponent = ({ show, onClose, messages }: any) => (
  <Slide direction="down" in={show} mountOnEnter unmountOnExit>
    <Paper
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        zIndex: 2,
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '48px',
        paddingBottom: '14px',
      }}
    >
      <Box sx={{ width: '60vw', height: '80vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ color: 'black', fontSize: '36px', fontWeight: '400', fontStyle: 'italic', fontFamily: 'Arial' }}>
            {`KPI for ${messages[0].message}`}
          </Box>
          <IconButton color="info" onClick={onClose}>
            <Close fontSize="large" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            height: '100%',
            marginTop: '32px',
            rowGap: '16px',
          }}
        >
          Test
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '14px',
          color: '#747F8D',
          fontSize: '12px',
          textAlign: 'center',
          position: 'absolute',
          width: '100%',
          bottom: 12,
          padding: '0 14px',
        }}
      >
        {labels.copyright}
      </Box>
    </Paper>
  </Slide>
);

export const EpicKDI = connect(mapStateToProps)(EpicKDIComponent);
