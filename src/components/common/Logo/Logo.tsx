import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import LogoImg from '../../../assets/images/alexGPT-logo.svg';

const styles = {
  logo: {
    height: '100%',
  },
};
export const Logo = () => (
  <RouterLink to="/">
    <Box component="img" sx={styles.logo} src={LogoImg} />
  </RouterLink>
);
