import { Close } from '@mui/icons-material';
import { Box, IconButton, Paper, Slide } from '@mui/material';
import { connect } from 'react-redux';

import { ConfluenceChat } from './ConfluenceChat';
import { PageOption } from './PageOption';

import { labels } from '../../../assets/locale/en';
import { MOCK_CONF_CONFLUENCE } from '../../../assets/mock/mock-data';
import { connectApi } from '../../../services/api';
import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { FormDataKeys } from '../../../store/form/action.types';

const getModeDisplay = (studio: string, mode: number[] | null) => {
  if (!mode || mode.length < 2 || !studio?.length) {
    return 'Confluence Configuration Setup';
  }
  const { groups } = MOCK_CONF_CONFLUENCE[studio];
  let data = groups[mode[0]].groups[mode[1]];
  if (mode.length === 3) {
    data = data.groups?.[mode[2]] ?? data;
  }
  return data.name;
};

export const ProjectSetupContainerComponent = ({
  show,
  onClose,
  confluenceMode,
  updateConfluenceMode,
  updateCurrentParents,
  formData,
}: any) => (
  <Slide direction="down" in={show} mountOnEnter>
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
            {getModeDisplay(formData[FormDataKeys.CP_CONFLUENCE_STUDIO], confluenceMode)}
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
          {!confluenceMode &&
            !!formData[FormDataKeys.CP_CONFLUENCE_STUDIO] &&
            MOCK_CONF_CONFLUENCE[formData[FormDataKeys.CP_CONFLUENCE_STUDIO]].groups.map((group, index) => (
              <PageOption
                displayName={group.name}
                key={group.name}
                onSelect={() => {
                  connectApi
                    .createPage(formData[FormDataKeys.CP_CONFLUENCE_SPACE], group.name, '')
                    .then((parent) => {
                      updateCurrentParents([parent.id]);
                      updateConfluenceMode([index, 0, ...(group.groups[0].groups ? [0] : [])]);
                    })
                    .catch(() => {
                      window.AP.flag.create({
                        title: 'Error',
                        body: 'There was an error creating the page...',
                        type: 'error',
                        close: 'auto',
                      });
                    });
                }}
              />
            ))}
          {!!confluenceMode && <ConfluenceChat />}
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

export const ProjectSetupContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectSetupContainerComponent);
