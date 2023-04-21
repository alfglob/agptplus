import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SaveIcon from '@mui/icons-material/Save';
import { Avatar, Box, IconButton, TextField } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';

import LogoImg from '../../assets/images/globantLogo.svg';
import { mapDispatchToProps, mapStateToProps } from '../../store';
import { theme } from '../../theme';

export const MessageComponent = ({ isGpt, message, updateGptMessage, messages }: any) => {
  const cleanedMessage = useMemo(() => {
    const regex = /(`(SD|ST|ED|ET)[:A-Za-z_]*`)+?/g;
    return message.replaceAll(regex, '');
  }, [message]);

  const [editing, setEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(message);

  const editable = isGpt && messages[messages.length - 1] === message;

  useEffect(() => {
    if (editing && messages[messages.length - 1] !== message) {
      setEditing(false);
    }
  }, [messages]);

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
    navigator.clipboard.writeText(cleanedMessage);
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
    width: '100%',
  };

  const renderGptMessage = () => (
    <Box
      sx={{
        padding: '24px',
        display: 'flex',
        gap: '18px',
        background: '#EBEDEF',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      <Box component="img" src={LogoImg} />
      <Box sx={markdownStyles}>
        {!editing && <ReactMarkdown>{cleanedMessage}</ReactMarkdown>}
        {editing && (
          <TextField
            multiline
            value={currentValue}
            onChange={(ev) => setCurrentValue(ev.target.value)}
            fullWidth
            sx={{ textarea: { color: 'black' }, fieldset: { border: 'none' }, width: '100%' }}
          />
        )}
      </Box>
      <IconButton onClick={copyToClipboard} aria-label="copy" sx={{ paddingTop: 0, color: 'grey' }}>
        <ContentCopyIcon />
      </IconButton>
      {!editing && editable && (
        <IconButton
          onClick={() => setEditing(true)}
          aria-label="edit"
          sx={{ color: 'grey', position: 'absolute', bottom: 4, right: 4, width: 45, height: 45 }}
        >
          <ModeEditIcon />
        </IconButton>
      )}
      {editing && (
        <>
          <IconButton
            onClick={() => {
              setEditing(false);
              setCurrentValue(message);
            }}
            aria-label="edit"
            sx={{ color: 'grey', position: 'absolute', bottom: 54, right: 4, width: 45, height: 45 }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditing(false);
              updateGptMessage(currentValue);
            }}
            aria-label="edit"
            sx={{ color: 'grey', position: 'absolute', bottom: 4, right: 4, width: 45, height: 45 }}
          >
            <SaveIcon />
          </IconButton>
        </>
      )}
    </Box>
  );

  return isGpt ? renderGptMessage() : renderUserMessage();
};

export const Message = connect(mapStateToProps, mapDispatchToProps)(MessageComponent);
