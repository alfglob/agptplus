import { Chat, Person, Today } from '@mui/icons-material';
import { Box, Chip, InputAdornment, TextField, Typography } from '@mui/material';

import { useState } from 'react';

import { MOCK_CONF_JIRA_PROMPT_DATA } from '../../assets/mock/mock-data';
import { appApi } from '../../services/api';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getDisplayDate = (date: string) => {
  const dateObj = new Date(date);
  return `${MONTHS[dateObj.getMonth()]} ${dateObj.getDate()}`;
};

export const HistoryCard = ({ chat, onSelect }: { chat: any; onSelect: () => void }) => {
  const [userStoryPoints, setUserStoryPoints] = useState(chat.user_story_points ?? chat.story_points ?? '');

  const handleStoryPointsUpdate = () => {
    appApi.setChatStoryPoints(chat.id, userStoryPoints).catch(() => {
      window.AP.flag.create({
        title: 'Error',
        body: 'There was an error updating the user story points...',
        type: 'error',
        close: 'auto',
      });
    });
  };
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        alignItems: 'center',
        width: '100%',
        paddingX: 6,
        paddingY: 2,
        columnGap: 1,
        borderRadius: 4,
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'rgba(70, 70, 70, .1)',
        },
      }}
      onClick={onSelect}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2 / span 2' }}>
        <Typography color="#0F172A" fontWeight={600} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
          {chat.user_prompt.content}
        </Typography>
        <Typography color="#38BDF8" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
          {`• ${(MOCK_CONF_JIRA_PROMPT_DATA as any)[chat.studio as string]?.display_name ?? chat.studio}`}
        </Typography>
      </Box>
      <p
        style={{
          boxOrient: 'vertical',
          lineClamp: 3,
          gridColumn: 'span 6 / span 6',
          color: '#64748B',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {chat.response.content}
      </p>
      <Chip
        icon={<Today htmlColor="#64748B" />}
        label={getDisplayDate(chat.created_at)}
        sx={{ backgroundColor: '#F8FAFC', color: '#64748B', gridColumn: 'span 2 / span 2', width: 'fit-content' }}
      />
      <Typography color="black" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Chat sx={{ marginRight: 2 }} />
        {chat.story_points}
      </Typography>
      <TextField
        value={userStoryPoints}
        onChange={(ev) => setUserStoryPoints(ev.target.value)}
        type="number"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person htmlColor="black" />
            </InputAdornment>
          ),
        }}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
        onBlur={handleStoryPointsUpdate}
        sx={{
          input: {
            border: 'none',
            color: 'black',
          },
          fieldset: { border: 'none' },
          zIndex: 2,
        }}
      />
    </Box>
  );
};
