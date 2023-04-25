import { AddComment, Groups, Tune } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';

import { FeedbackDialog } from './FeedbackDialog';
import { IOSSwitch } from './IOSSwitch';
import { JiraAvatar } from './JiraAvatar';
import { JiraPopover } from './JiraPopover';

import { mapDispatchToProps, mapStateToProps } from '../../../store';

export const OptionCardComponent = ({
  settingKey,
  displayName,
  settings,
  updateAsignee,
  toggleSetting,
  DialogComponent,
}: any) => {
  const [asigneeEl, setAsigneEl] = useState<EventTarget | null>(null);
  const currentSettings = settings[settingKey];
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

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
      {DialogComponent && (
        <>
          <DialogComponent show={showSettings} onClose={() => setShowSettings(false)} />
          <IconButton
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: '#AAB2CB',
              width: 86,
              height: 86,
              label: { display: 'flex', flexDirection: 'column' },
            }}
            onClick={() => setShowSettings(true)}
          >
            <Tune fontSize="large" />
            <Typography fontSize={10}>Parameters</Typography>
          </IconButton>
        </>
      )}
      <IconButton
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: '#1F64FF',
          width: 86,
          height: 86,
          label: { display: 'flex', flexDirection: 'column' },
        }}
        onClick={(ev) => setAsigneEl(ev.target)}
      >
        {!currentSettings.asignee && <Groups fontSize="large" />}
        {!!currentSettings.asignee && <JiraAvatar user={currentSettings.asignee} />}
        <Typography fontSize={10} color="#AAB2CB">
          Asignee
        </Typography>
      </IconButton>
      <JiraPopover
        anchorEl={asigneeEl}
        onClose={() => setAsigneEl(null)}
        value={currentSettings.asignee}
        onChange={(val: any) => {
          updateAsignee({ key: settingKey, value: val });
        }}
      />
      <Typography color="black" sx={{ flex: 1 }} fontWeight="700" fontSize={20} fontFamily="Arial">
        {displayName}
      </Typography>
    </Box>
  );
};

export const OptionCard = connect(mapStateToProps, mapDispatchToProps)(OptionCardComponent);
