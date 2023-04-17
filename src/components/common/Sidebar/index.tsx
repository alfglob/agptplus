import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from '../../../config/routes';
import { ExampleList } from '../../../pages/StudiosPage/Examples/ExamplesList';
import { mapStateToProps } from '../../../store';

export const drawerWidth = 280;

export const ResponsiveDrawerComponent = ({ studios }: any) => {
  const renderStudio = () => {
    if (!studios.openStudio) {
      return null;
    }
    const { iconPath, title } = studios.openStudio || {};
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '18px 14px',
          gap: '14px',
          background: 'rgba(0, 0, 0, 0.23)',
          color: '#FFFFFF',
        }}
      >
        {iconPath && (
          <Box>
            <img src={iconPath} alt="Studio icon" />
          </Box>
        )}
        <Typography>{title}</Typography>
      </Box>
    );
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          color: 'black',
          boxSizing: 'border-box',
          background: '#F2F3F5',
          paddingTop: '48px',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <Link
          to={APP_ROUTES.ROOT}
          style={{
            color: '#6A7480',
            padding: '28px 18px',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <span>Globant CHANNELS</span>
          <span>+</span>
        </Link>
        {renderStudio()}
        <ExampleList />
      </Box>
    </Drawer>
  );
};

export const ResponsiveDrawer = connect(mapStateToProps)(ResponsiveDrawerComponent);
