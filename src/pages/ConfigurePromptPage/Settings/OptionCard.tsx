import { AddComment, Groups, Tune } from '@mui/icons-material';
import { Box, IconButton, styled, Switch, SwitchProps, Typography } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';

import { FeedbackDialog } from './FeedbackDialog';
import { JiraPopover } from './JiraPopover';

import { mapDispatchToProps, mapStateToProps } from '../../../store';

const IOSSwitch = styled((props: SwitchProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export const OptionCardComponent = ({ settingKey, displayName, settings, toggleSetting }: any) => {
  const [assigneeEl, setAssigneEl] = useState<EventTarget | null>(null);
  const currentSettings = settings[settingKey];
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
      <IOSSwitch checked={currentSettings?.enabled} onChange={() => toggleSetting({ key: settingKey })} />
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
      <IconButton
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: '#AAB2CB',
          width: 86,
          height: 86,
          label: { display: 'flex', flexDirection: 'column' },
        }}
      >
        <Tune fontSize="large" />
        <Typography fontSize={10}>Parameters</Typography>
      </IconButton>
      <IconButton
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: '#1F64FF',
          width: 86,
          height: 86,
          label: { display: 'flex', flexDirection: 'column' },
        }}
        onClick={(ev) => setAssigneEl(ev.target)}
      >
        <Groups fontSize="large" />
        <Typography fontSize={10} color="#AAB2CB">
          Asignee
        </Typography>
      </IconButton>
      <JiraPopover anchorEl={assigneeEl} onClose={() => setAssigneEl(null)} settingKey={settingKey} />
      <Typography color="black" sx={{ flex: 1 }} fontWeight="700" fontSize={20} fontFamily="Arial">
        {displayName}
      </Typography>
    </Box>
  );
};

export const OptionCard = connect(mapStateToProps, mapDispatchToProps)(OptionCardComponent);
