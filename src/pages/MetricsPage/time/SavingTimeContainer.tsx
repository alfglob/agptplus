import { Close } from '@mui/icons-material';
import { Box, Button, IconButton, MenuItem, Paper, Select, Slide, TextField, Typography } from '@mui/material';

import { useState } from 'react';

import { SavingTimeCards } from './SavingTimeCards';

import { labels } from '../../../assets/locale/en';

export const SavingTimeContainer = ({ show, onClose }: any) => {
  const [model, setModel] = useState('ChatGPT');
  const [userStories, setUserStories] = useState(30);
  const [avgTime, setAvgTime] = useState(60);
  const [showResults, setShowResults] = useState(false);

  return (
    <Slide direction="down" in={show} mountOnEnter unmountOnExit>
      <Paper
        sx={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
          zIndex: 5,
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
              Saving Time Calculator
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
            {!showResults && (
              <>
                <Typography color="black">AI Model</Typography>
                <Select value={model} onChange={(ev) => setModel(ev.target.value)} sx={{ color: 'black' }}>
                  <MenuItem value="ChatGPT">ChatGPT</MenuItem>
                </Select>
                <Typography color="black">User stories to write</Typography>
                <TextField
                  value={userStories}
                  type="number"
                  onChange={(ev) => setUserStories(parseInt(ev.target.value, 10))}
                  sx={{
                    input: {
                      color: 'black',
                    },
                  }}
                />
                <Typography color="black">Average time to write a US (minutes)</Typography>
                <TextField
                  value={avgTime}
                  type="number"
                  onChange={(ev) => setAvgTime(parseInt(ev.target.value, 10))}
                  sx={{
                    input: {
                      color: 'black',
                    },
                  }}
                />

                <Button onClick={() => setShowResults(true)}>Calculate</Button>
              </>
            )}
            {showResults && <SavingTimeCards model={model} userStories={userStories} avgTime={avgTime} />}
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
