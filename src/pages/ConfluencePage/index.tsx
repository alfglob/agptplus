import { Box } from '@mui/material';
import { connect } from 'react-redux';

import { ProjectSetupContainer } from './Confluence/ProjectSetupContainer';
import { PromptForm } from './PromptDetails/PromptForm';

import { labels } from '../../assets/locale/en';
import { PageContainer } from '../../components/common/PageContainer';
import { mapDispatchToProps, mapStateToProps } from '../../store';
import { FormDataKeys } from '../../store/form/action.types';

export const ConfluencePageComponent = ({ formData }: any) => {
  const showContainer = !!formData[FormDataKeys.CP_CONFLUENCE_SPACE] && !!formData[FormDataKeys.CP_CONFLUENCE_STUDIO];
  if (!window.AP.context) {
    return null;
  }

  return (
    <PageContainer
      showSidebar={false}
      headerText="Configure your prompt."
      bgColor="white"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 'calc(100vh)',
        width: 'calc(100vw - 280px)',
        paddingTop: '48px',
        paddingBottom: '14px',
      }}
    >
      <PromptForm />
      {showContainer && <ProjectSetupContainer />}
      <Box
        sx={{
          marginTop: '14px',
          color: '#747F8D',
          fontSize: '12px',
          textAlign: 'center',
          padding: '0 14px',
        }}
      >
        {labels.copyright}
      </Box>
    </PageContainer>
  );
};

export const ConfluencePage = connect(mapStateToProps, mapDispatchToProps)(ConfluencePageComponent);
