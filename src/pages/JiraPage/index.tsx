import { Box, Button } from '@mui/material';
import { connect } from 'react-redux';

import { PromptForm } from './PromptDetails/PromptForm';

import { labels } from '../../assets/locale/en';
import { Chat } from '../../components/Chat/Chat';
import { ApiKeyDialog } from '../../components/common/ApiKeyDialog';
import { ConfidentialSnackbar } from '../../components/common/ConfidentialSnackbar';
import { PageContainer } from '../../components/common/PageContainer';
import { appApi } from '../../services/api';
import { mapDispatchToProps, mapStateToProps } from '../../store';

import { FormDataKeys } from '../../store/form/action.types';

const parseSpecialElements = (message: string) => {
  const results: { [key: string]: { summary: string; description: string }[] } = {};
  const regex = /`SD:(\w+)` `ST`([\s\S]*?)`ET`[\s\S]*?`SDESC`([\s\S]*?)`EDESC` `ED:\1`/g;

  let matches;
  // eslint-disable-next-line no-cond-assign
  while ((matches = regex.exec(message)) !== null) {
    const token = matches[1];
    const title = matches[2];
    const description = matches[3];
    const obj = { summary: title, description };
    results[token] = results[token] ? [...results[token], obj] : [obj];
  }

  return results;
};

export const JiraPageComponent = ({ messages, isLoading, formData }: any) => {
  const currentKey = formData[FormDataKeys.CP_SYSTEM];

  const handleSendBtn = () => {
    if (messages.length < 2 || !window.AP.context) {
      return;
    }
    const usType = formData[FormDataKeys.CP_US_TYPE];
    const regex = /(`(SD|ST|ED|ET)[:A-Za-z_]*`)+?/g;
    const chatMessage = messages[messages.length - 1].message.replaceAll(regex, '');
    appApi
      .createJiraIssue(messages[0].message, chatMessage, usType && usType.length ? usType : undefined)
      .then((res) => {
        if (res.data?.key) {
          const lastMessage = messages[messages.length - 1].message;
          const scenarios = parseSpecialElements(lastMessage);
          Object.keys(scenarios).forEach((type) => {
            const data = scenarios[type];
            data.forEach((value) => {
              appApi.createScenario(type, res.data.key, value.summary, value.description);
            });
          });

          const URL_TO_OPEN = `https://alexgptplusplus.atlassian.net/browse/${res.data.key}`;
          window.open(URL_TO_OPEN, '_blank');
        }
      });
  };

  const buttonEnabled = !isLoading && messages.length >= 2;
  const chatDisabled = !currentKey;
  const extraName = 'Send to JIRA';
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
        paddingTop: '54px',
        paddingBottom: '6px',
      }}
    >
      <PromptForm />
      <ConfidentialSnackbar />
      <ApiKeyDialog />
      <Chat
        emptyText="Ask AlexGPT+ to test your prompt..."
        placeholder="Test your prompt"
        disableChat={chatDisabled ? 'Please select a studio first.' : ''}
      />

      {window.AP.context && (
        <Button
          disabled={!buttonEnabled}
          onClick={handleSendBtn}
          sx={{
            backgroundColor: '#004993',
            color: '#fff',
            width: 'auto',
            marginX: '24px',
            marginTop: '16px',
          }}
        >
          {extraName}
        </Button>
      )}
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

export const JiraPage = connect(mapStateToProps, mapDispatchToProps)(JiraPageComponent);
