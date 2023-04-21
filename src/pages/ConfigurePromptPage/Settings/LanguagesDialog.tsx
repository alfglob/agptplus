import { Box, Button, Dialog, DialogContent, DialogTitle, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import { connect } from 'react-redux';

import { IOSSwitch } from './IOSSwitch';

import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { SettingsKeys } from '../../../store/settings/action.types';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
    // eslint-disable-next-line react/jsx-props-no-spreading
  ) => <Slide direction="up" ref={ref} {...props} />,
);

const SUPPORTED_LANGUAGES = ['Spanish', 'English', 'French'];

export const LanguagesDialogComponent = ({ settings, updatePreferences, show, onClose }: any) => {
  const isLanguageActive = (lang: string) => !!settings[SettingsKeys.LABEL_TRANSLATIONS].preferences[lang];

  const toggleLanguage = (lang: string) => {
    updatePreferences({
      key: SettingsKeys.LABEL_TRANSLATIONS,
      value: {
        ...settings[SettingsKeys.LABEL_TRANSLATIONS].preferences,
        [lang]: !isLanguageActive(lang),
      },
    });
  };

  return (
    <Dialog
      open={show}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        style: { backgroundColor: '#f4f4f4', color: 'black', justifyContent: 'center', padding: '24px 64px' },
      }}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ textAlign: 'center', whiteSpace: 'break-spaces' }}>
        Select languages to translate your text
      </DialogTitle>
      <DialogContent sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ backgroundColor: '#f0f0f0', width: '90%', height: '60vh', overflowY: 'auto', borderRadius: 6 }}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingX: 8, paddingY: 2 }}>
              <Typography fontWeight={600} fontFamily="Arial">
                {lang}
              </Typography>
              <IOSSwitch checked={isLanguageActive(lang)} onChange={() => toggleLanguage(lang)} />
            </Box>
          ))}
        </Box>

        <Button
          sx={{
            backgroundColor: '#004993',
            color: '#fff',
            marginTop: '16px',
            borderRadius: '16px',
            width: '80%',
          }}
          onClick={onClose}
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export const LanguagesDialog = connect(mapStateToProps, mapDispatchToProps)(LanguagesDialogComponent);
