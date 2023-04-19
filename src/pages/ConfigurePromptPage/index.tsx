import { Box, Button } from '@mui/material';
import { connect } from 'react-redux';

import { PromptForm } from './PromptDetails/PromptForm';

import { labels } from '../../assets/locale/en';
import { Chat } from '../../components/Chat/Chat';
import { ConfidentialSnackbar } from '../../components/common/ConfidentialSnackbar';
import { PageContainer } from '../../components/common/PageContainer';
import { jiraApi } from '../../services/api';
import { mapDispatchToProps, mapStateToProps } from '../../store';

import { FormDataKeys } from '../../store/form/action.types';

export const ConfigurePromptPageComponent = ({ messages, isLoading, formData }: any) => {
  const handleCreateIssue = () => {
    if (messages.length < 2) {
      return;
    }
    const usType = formData[FormDataKeys.CP_US_TYPE];
    jiraApi
      .createJiraIssue(
        messages[0].message,
        messages[messages.length - 1].message,
        usType && usType.length ? usType : undefined,
      )
      .then((res) => {
        const URL_TO_OPEN = `https://alexgptplusplus.atlassian.net/browse/${res.data.key}`;
        window.open(URL_TO_OPEN, '_blank');
      });
  };

  const buttonEnabled = !isLoading && messages.length >= 2;
  const chatDisabled = !formData[FormDataKeys.CP_SYSTEM];
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
      <ConfidentialSnackbar />
      <Chat
        emptyText="Ask AlexGPT+ to test your prompt..."
        placeholder="Test your prompt"
        disableChat={chatDisabled ? 'Please select a studio first.' : ''}
      />

      <Button
        disabled={!buttonEnabled}
        onClick={handleCreateIssue}
        sx={{
          backgroundColor: '#004993',
          color: '#fff',
          width: 'auto',
          marginX: '24px',
          marginTop: '16px',
        }}
      >
        Send to JIRA
      </Button>
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

export const ConfigurePromptPage = connect(mapStateToProps, mapDispatchToProps)(ConfigurePromptPageComponent);
