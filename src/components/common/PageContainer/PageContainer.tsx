import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps } from '../../../store';

import { Header } from '../Header/Header';

const styles = {
  pageWrapper: {
    flex: 1,
    display: 'flex',
  },
};
export const PageContainerComponent = ({
  title = '',
  sx = {},
  children,
  bgColor = '#1d282e',
  headerText = '',
}: any) => (
  <>
    <Header title={headerText} />
    <Box sx={styles.pageWrapper} bgcolor={bgColor}>
      <Box sx={{ flexGrow: 1, py: 3, color: 'white', maxHeight: '100vh', ...sx }}>
        {title && (
          <Typography mt={2} mb={3} variant="h4" data-testid="pageTitle">
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Box>
  </>
);

export const PageContainer = connect(mapStateToProps)(PageContainerComponent);
