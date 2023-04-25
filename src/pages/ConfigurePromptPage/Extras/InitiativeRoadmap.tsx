import { Close } from '@mui/icons-material';
import { Box, CircularProgress, IconButton, Paper, Slide } from '@mui/material';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { RoadmapCard } from './RoadmapCard';

import { labels } from '../../../assets/locale/en';
import { appApi } from '../../../services/api';
import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { mapRoadmapResponse } from '../../../utils/mapOpenAIResponse';

export const InitiativeRoadmapComponent = ({ show, onClose, messages, roadmap, updateRoadmap }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!messages.length || !messages[messages.length - 1].isGpt) {
      return;
    }

    setLoading(true);
    appApi
      .askOpenAI([
        {
          role: 'user',
          content: messages[messages.length - 1].message,
        },
        {
          role: 'system',
          content:
            'Reply only with roadmap of the following epics with an MVP name and the associated epics: \n\n' +
            '1. `SD:ROADMAP` `ST`<MVP Name>`ET`: `SDESC`<Epics with line breaks>`EDESC` `ED:ROADMAP`\n' +
            '2. `SD:ROADMAP` `ST`<MVP Name>`ET`: `SDESC`<Epics with line breaks>`EDESC` `ED:ROADMAP`\n' +
            '3. `SD:ROADMAP` `ST`<MVP Name>`ET`: `SDESC`<Epics with line breaks>`EDESC` `ED:ROADMAP`\n',
        },
      ])
      .then((res) => {
        updateRoadmap(mapRoadmapResponse(res));
        setLoading(false);
      })
      .catch(() => {
        window.AP.flag.create({
          title: 'Error',
          body: 'There was an error retrieving the roadmap...',
          type: 'error',
          close: 'auto',
        });
      });
  }, [messages]);

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
          paddingTop: '48px',
          paddingBottom: '14px',
        }}
      >
        <Box
          sx={{
            width: '95vw',
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            '@media (min-width: 780px)': { width: '60vw' },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ color: 'black', fontSize: '36px', fontWeight: '400', fontStyle: 'italic', fontFamily: 'Arial' }}>
              Roadmap for the initiative. With MVP format
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
            {loading && <CircularProgress />}
            {roadmap.map((entry: any, index: number) => (
              <RoadmapCard index={index} key={entry.mvp} />
            ))}
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

export const InitiativeRoadmap = connect(mapStateToProps, mapDispatchToProps)(InitiativeRoadmapComponent);
