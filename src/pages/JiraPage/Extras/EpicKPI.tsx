import { Close } from '@mui/icons-material';
import { Box, CircularProgress, IconButton, Paper, Slide } from '@mui/material';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { KPICard } from './KPICard';

import { labels } from '../../../assets/locale/en';
import { appApi } from '../../../services/api';
import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { mapKpiResponse } from '../../../utils/mapOpenAIResponse';

export const EpicKPIComponent = ({ show, onClose, messages, kpi, updateKpi }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!messages.length || !messages[messages.length - 1].isGpt) {
      return;
    }

    setLoading(true);
    appApi
      .askOpenAI(
        [
          {
            role: 'user',
            content: messages[messages.length - 1].message,
          },
          {
            role: 'system',
            content:
              'Reply only with the Key Performance Indicators of the following epics generating approximate indicator' +
              'in a numeric value or percent value (do not add any explanation in the value, you must add only the unit) ' +
              'using the following template: \n\n' +
              '1. `SD:KPI` `ST`<KPI description>`ET`: `SDESC`<KPI numeric value>`EDESC` `ED:KPI`\n' +
              '2. `SD:KPI` `ST`<KPI description>`ET`: `SDESC`<KPI numeric value>`EDESC` `ED:KPI`\n' +
              '3. `SD:KPI` `ST`<KPI description>`ET`: `SDESC`<KPI numeric value>`EDESC` `ED:KPI`\n',
          },
        ],
        'kpi',
      )
      .then((res) => {
        updateKpi(mapKpiResponse(res));
        setLoading(false);
      })
      .catch(() => {
        window.AP.flag.create({
          title: 'Error',
          body: 'There was an error retrieving the KPIs...',
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
              {`KPI for ${messages[0]?.message}`}
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
            {kpi.map((entry: any, index: number) => (
              <KPICard index={index} key={entry.summary} />
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

export const EpicKPI = connect(mapStateToProps, mapDispatchToProps)(EpicKPIComponent);
