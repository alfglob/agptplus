import { Close } from '@mui/icons-material';
import { Box, IconButton, Paper, Slide } from '@mui/material';
import { connect } from 'react-redux';

import { LanguagesDialog } from './LanguagesDialog';
import { OptionCard } from './OptionCard';

import { labels } from '../../../assets/locale/en';
import { SettingsKeys } from '../../../store/settings/action.types';

export const SettingsContainerComponent = ({ show, onClose }: any) => (
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
      <Box sx={{ width: '60vw', height: '80vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ color: 'black', fontSize: '36px', fontWeight: '400', fontStyle: 'italic', fontFamily: 'Arial' }}>
            Settings
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
          <OptionCard settingKey={SettingsKeys.CREATE_TESTS} displayName="Create Manual Test Cases" />
          <OptionCard settingKey={SettingsKeys.GENERATE_CODE_TESTS} displayName="Generate Code and Unit Test" />
          <OptionCard settingKey={SettingsKeys.GENERATE_UI_EXAMPLES} displayName="Generate UI/UX examples" />
          <OptionCard
            settingKey={SettingsKeys.LABEL_TRANSLATIONS}
            displayName="Languages to translate the labels"
            DialogComponent={LanguagesDialog}
          />
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

export const SettingsContainer = connect()(SettingsContainerComponent);
