import { Close } from '@mui/icons-material';
import { Box, Button, CircularProgress, IconButton, Paper, Slide } from '@mui/material';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { RoadmapCard } from './RoadmapCard';

import { labels } from '../../../assets/locale/en';
import { GanttChart } from '../../../components/gantt/GanttChart';
import { appApi } from '../../../services/api';
import { mapDispatchToProps, mapStateToProps } from '../../../store';

export const InitiativeRoadmapComponent = ({ show, onClose, messages, roadmap, updateRoadmap }: any) => {
  const [loading, setLoading] = useState(true);

  const [showRoadmap, setShowRoadmap] = useState(false);

  useEffect(() => {
    if (!messages.length || !messages[messages.length - 1].isGpt) {
      return;
    }

    setLoading(true);
    const regex = /(`(SD|ST|ED|ET)[:A-Za-z_]*`)+?/g;
    const cleanMessage = messages[messages.length - 1].message.replaceAll(regex, '');
    appApi
      .askOpenAI(
        [
          {
            role: 'user',
            content: cleanMessage,
          },
          {
            role: 'system',
            content:
              'Reply only with the roadmap of the following epics with multiple MVPs and the associated ' +
              'epics in this JSON format: \n\n' +
              '[{ mvp: "MVP 1", from: "2023-04-26", to: "2023-06-30", epics: [{ epicName: "My epic", from: "2023-04-26", to: ' +
              '"2026-05-1"}]}]\n',
          },
        ],
        'roadmap',
      )
      .then((res) => {
        const message = res.data?.choices[0]?.message?.content ?? '';
        updateRoadmap(JSON.parse(message));
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
            '@media (min-width: 780px)': { width: showRoadmap ? '95vw' : '60vw' },
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
            {!loading && (
              <>
                {!showRoadmap &&
                  roadmap.map((entry: any, index: number) => <RoadmapCard index={index} key={entry.mvp} />)}
                {showRoadmap && <GanttChart mvps={roadmap} />}
                <Button
                  sx={{ backgroundColor: '#004993', color: 'white' }}
                  onClick={() => setShowRoadmap(!showRoadmap)}
                >
                  {showRoadmap ? 'Hide the roadmap' : 'Show me the roadmap'}
                </Button>
              </>
            )}
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
