import { AddComment } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';

import { FeedbackDialog } from '../../JiraPage/Settings/FeedbackDialog';

export const PageOptionComponent = ({ displayName, onSelect }: any) => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: '#f5f6fa',
        width: '100%',
        borderRadius: '10px',
        paddingX: '45px',
        paddingY: '8px',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        columnGap: '12px',
      }}
    >
      <Button
        sx={{
          backgroundColor: '#004993',
          color: '#fff',
          width: 'auto',
          marginX: '24px',
        }}
        onClick={onSelect}
      >
        Setup
      </Button>
      <IconButton
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: '#AAB2CB',
          width: 86,
          height: 86,
          label: { display: 'flex', flexDirection: 'column' },
        }}
        onClick={() => setFeedbackOpen(true)}
      >
        <AddComment fontSize="large" />
        <Typography fontSize={10}>Send Feedback</Typography>
      </IconButton>
      <FeedbackDialog settingName={displayName} show={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
      <Typography color="black" sx={{ flex: 1 }} fontWeight="700" fontSize={20} fontFamily="Arial">
        {displayName}
      </Typography>
    </Box>
  );
};

export const PageOption = connect()(PageOptionComponent);
