/* eslint-disable max-len,react/jsx-wrap-multilines */
import { WarningOutlined } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import { Message } from './Message';

import ChatImg from '../../../assets/images/chatIcon.svg';
import { labels } from '../../../assets/locale/en';
import { ErrorAlert } from '../../../components/common/ErrorAlert';
import { DotsLoading } from '../../../components/common/Loading/Dots';
import { mapDispatchToProps, mapStateToProps } from '../../../store';

const MAX_LEN = 140;
export const ChatComponent = ({
  messages,
  openExample,
  addUserMessage,
  chatLoading,
  emptyText = '',
  placeholder = '',
}: any) => {
  const ref = useRef(null);
  useEffect(() => {
    // @ts-ignore
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  const renderMessages = (bottomRef: any) => (
    <Box
      sx={{
        flex: 1,
        height: 'calc(100% - 24px)',
        overflow: 'scroll',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '14px',
      }}
    >
      {openExample && (
        <Box
          sx={{
            padding: '18px 24px',
            color: '#38A169',
            background: '#C6F6D5',
          }}
        >
          {openExample}
        </Box>
      )}
      {messages.map(({ id, isGpt, message }: any) => (
        <Message key={id} isGpt={isGpt} message={message} />
      ))}
      {chatLoading && (
        <Box
          sx={{
            padding: '24px',
            gap: '14px',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <DotsLoading />
          AlexGPT+
        </Box>
      )}
      <div ref={bottomRef} />
    </Box>
  );

  const renderEmptyChat = () => (
    <Box
      id="emptyChat"
      sx={{
        flex: 1,
        height: 'calc(100% - 24px)',
        overflow: 'scroll',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '14px',
      }}
    >
      <Box
        sx={{
          background: '#FEEBC8',
          color: '#DD6B20',
          padding: '24px',
          borderRadius: '12px',
          maxWidth: '70%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
            fontSize: '18px',
            fontWeight: '600',
          }}
        >
          {emptyText || 'Choose an example or ask AlexGPT'}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '14px',
          }}
        >
          <WarningOutlined />
          {labels.confidentialWarning}
        </Box>
      </Box>
    </Box>
  );

  const [value, setValue] = useState('');
  const addMessageToChat = () => {
    if (!value.trim()) {
      return;
    }

    addUserMessage({
      message: value,
      isGpt: false,
    });
    setValue('');
  };

  const onKeyDown = (event: any) => {
    if (event.code === 'Enter' && !event.shiftKey) {
      addMessageToChat();
      event.preventDefault();
    }
  };

  const [error, setError] = useState('');
  const onChange = (event: any) => {
    if (event.target.value.length > MAX_LEN) {
      setError(`* The length of your input must be ${MAX_LEN} characters or fewer`);
    } else {
      setError('');
    }

    setValue(event.target.value.substring(0, MAX_LEN));
  };

  return (
    <>
      {messages.length ? renderMessages(ref) : renderEmptyChat()}
      <Box sx={{ paddingTop: '10px', position: 'relative' }}>
        {error && <ErrorAlert message={error} />}
        <OutlinedInput
          sx={{
            textarea: {
              color: '#747F8D',
              background: '#EBEDEF',
              borderRadius: '8px',
              padding: '12px 18px',
              outline: 'none',
              width: 'calc(100% - 80px)',
              '&:focus': {
                outline: 'none',
              },
              border: 'none',
              maxHeight: '35px',
              overflow: 'scroll !important',
            },
            fieldset: {
              border: 'none',
            },
            width: 'calc(100% - 48px)',
            padding: '0',
            marginX: '24px',
            '&:focus': {
              outline: 'none',
            },
          }}
          placeholder={placeholder || 'ask to alexGPT+'}
          value={value}
          multiline
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={chatLoading}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" disabled={chatLoading} onClick={addMessageToChat}>
                <Box component="img" src={ChatImg} />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
    </>
  );
};

export const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
