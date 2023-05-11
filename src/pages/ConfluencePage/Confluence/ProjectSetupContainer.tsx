import { Box } from '@mui/material';
import { connect } from 'react-redux';

import { ConfluenceChat } from './ConfluenceChat';
import { PageOption } from './PageOption';

import { MOCK_CONF_PROJECT_SETUP } from '../../../assets/mock/mock-data';
import { appApi } from '../../../services/api';
import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { FormDataKeys } from '../../../store/form/action.types';

const getModeDisplay = (studio: string, mode: number[] | null) => {
  if (!mode || mode.length < 2 || !studio?.length) {
    return 'Confluence Configuration Setup';
  }
  const { groups } = MOCK_CONF_PROJECT_SETUP[studio];
  let data = groups[mode[0]].groups[mode[1]];
  if (mode.length === 3) {
    data = data.groups?.[mode[2]] ?? data;
  }
  return data.name;
};

export const ProjectSetupContainerComponent = ({
  confluenceMode,
  updateConfluenceMode,
  updateCurrentParents,
  formData,
}: any) => (
  <Box
    sx={{
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '24px',
      paddingBottom: '8px',
    }}
  >
    <Box sx={{ width: '60vw', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ color: 'black', fontSize: '36px', fontWeight: '400', fontStyle: 'italic', fontFamily: 'Arial' }}>
        {getModeDisplay(formData[FormDataKeys.CP_CONFLUENCE_STUDIO], confluenceMode)}
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
          MOCK_CONF_PROJECT_SETUP[formData[FormDataKeys.CP_CONFLUENCE_STUDIO]].groups.map((group, index) => (
            <PageOption
              displayName={group.name}
              key={group.name}
              onSelect={() => {
                appApi
                  .createPage(formData[FormDataKeys.CP_CONFLUENCE_SPACE], group.name, '~')
                  .then((parent) => {
                    updateCurrentParents([parent.data.id]);
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
  </Box>
);

export const ProjectSetupContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectSetupContainerComponent);
