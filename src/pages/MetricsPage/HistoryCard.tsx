import { Today } from '@mui/icons-material';
import { Box, Chip, Typography } from '@mui/material';

import { MOCK_CONF_JIRA_PROMPT_DATA } from '../../assets/mock/mock-data';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getDisplayDate = (date: string) => {
  const dateObj = new Date(date);
  return `${MONTHS[dateObj.getMonth()]} ${dateObj.getDate()}`;
};

export const HistoryCard = ({ chat, onSelect }: { chat: any; onSelect: () => void }) => (
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
        gridColumn: 'span 8 / span 8',
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
      sx={{ backgroundColor: '#F8FAFC', color: '#64748B', gridColumn: 'span 2 / span 2' }}
    />
  </Box>
);
