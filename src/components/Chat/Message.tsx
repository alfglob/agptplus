import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Avatar, Box, IconButton } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';

import LogoImg from '../../assets/images/globantLogo.svg';
import { mapStateToProps } from '../../store';
import { theme } from '../../theme';

export const MessageComponent = ({ isGpt, message }: any) => {
  const renderUserMessage = () => (
    <Box
      sx={{
        padding: '24px',
        display: 'flex',
        gap: '18px',
        whiteSpace: 'pre-line',
        alignItems: 'flex-start',
      }}
    >
      <Avatar
        sx={{
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
        }}
      />
      <Box>{message}</Box>
    </Box>
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
  };

  const markdownStyles = {
    li: {
      width: 'calc(100% - 30px)',
      wordBreak: 'break-word',
      position: 'relative',
      left: '30px',
      marginBottom: '14px',
    },
    'ol, ul': {
      marginTop: '10px',
    },
  };

  const renderGptMessage = () => (
    <Box
      sx={{
        padding: '24px',
        display: 'flex',
        gap: '18px',
        background: '#EBEDEF',
        alignItems: 'flex-start',
      }}
    >
      <Box component="img" src={LogoImg} />
      <Box sx={markdownStyles}>
        <ReactMarkdown>{message}</ReactMarkdown>
      </Box>
      <IconButton onClick={copyToClipboard} aria-label="copy" sx={{ paddingTop: 0, color: 'grey' }}>
        <ContentCopyIcon />
      </IconButton>
    </Box>
  );

  return isGpt ? renderGptMessage() : renderUserMessage();
};

export const Message = connect(mapStateToProps)(MessageComponent);
