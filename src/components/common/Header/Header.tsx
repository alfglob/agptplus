import { AppBar, Box } from '@mui/material';
import { connect } from 'react-redux';

import pathIcon from '../../../assets/images/pathIcon.svg';
import { mapStateToProps } from '../../../store';
import { theme } from '../../../theme';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    color: '#060607',
    backgroundImage: 'none',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    zIndex: (them: any) => them.zIndex.drawer + 1,
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
  },
  studioTitle: {
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '16px',
  },
  profileImg: {
    borderRadius: '50%',
    bgcolor: theme.palette.common.white,
    color: theme.palette.common.black,
    width: {
      xs: '30px',
      md: '32px',
    },
    height: {
      xs: '30px',
      md: '32px',
    },
    fontSize: '15px',
  },
};
export const HeaderComponent = ({ isLoading, title }: any) => {
  const pageTitle = title || 'general';

  return (
    <AppBar position="fixed" sx={styles.header} data-testid="header" id="header">
      <Box sx={styles.leftSide}>
        <Box sx={styles.studioTitle}>
          <Box
            component="img"
            src={pathIcon}
            sx={{
              objectFit: 'contain',
              objectPosition: 'center',
              width: '20px',
              height: '20px',
              paddingRight: '8px',
            }}
            alt="studio-path"
          />
          {!isLoading && <span>{pageTitle}</span>}
        </Box>
      </Box>
    </AppBar>
  );
};

export const Header = connect(mapStateToProps)(HeaderComponent);
