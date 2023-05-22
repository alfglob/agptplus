import { Close } from '@mui/icons-material';
import { Box, IconButton, Paper, Slide, Typography } from '@mui/material';

import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { labels } from '../../assets/locale/en';
import { Chat } from '../../components/Chat/Chat';
import { appApi } from '../../services/api';
import { mapDispatchToProps, mapStateToProps } from '../../store';

export const HistoryContainerComponent = ({ show, onClose, chat, setMessages }: any) => {
  const [chatData, setChatData] = useState<any>(null);

  useEffect(() => {
    if (!chat) {
      setChatData(null);
      return;
    }
    appApi.getChat(chat.id).then((res) => {
      setChatData(res.data.data);
      setMessages(
        res.data.data.history
          .filter((m: any) => m.role !== 'system')
          .map((message: any) => ({
            // eslint-disable-next-line no-underscore-dangle
            id: message._id,
            message: message.content,
            isGpt: message.role !== 'user',
          })),
      );
    });
  }, [chat]);

  return (
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
          paddingTop: '64px',
          paddingBottom: '14px',
        }}
      >
        <Box sx={{ width: '80vw', height: '85vh', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ color: 'black', fontSize: '36px', fontWeight: '400', fontStyle: 'italic', fontFamily: 'Arial' }}>
              Chat History
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
            <Typography
              color="#64748B"
              sx={{
                maxHeight: '96px',
                overflowY: 'auto',
                borderRadius: 4,
                border: '1px solid #64748B',
                paddingX: 3,
                paddingY: 1,
              }}
            >
              {chatData?.prompt?.value ?? ''}
            </Typography>
            <Chat messages={chatData?.history ?? []} withoutInput />
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
};

export const HistoryContainer = connect(mapStateToProps, mapDispatchToProps)(HistoryContainerComponent);
