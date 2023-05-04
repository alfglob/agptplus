import { Box, Button } from '@mui/material';
import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { MOCK_CONF_CONFLUENCE } from '../../../assets/mock/mock-data';
import { Chat } from '../../../components/Chat/Chat';
import { connectApi } from '../../../services/api';
import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { FormDataKeys } from '../../../store/form/action.types';

const getSystemPrompt = (studio: string, mode: number[]) => {
  const data = MOCK_CONF_CONFLUENCE[studio].groups[mode[0]].groups;
  return (mode.length === 3 ? data[mode[1]].groups?.[mode[2]].prompt : data[mode[1]].prompt) ?? '';
};

const getPageTitle = (studio: string, mode: number[]) => {
  const data = MOCK_CONF_CONFLUENCE[studio].groups[mode[0]].groups;
  return (mode.length === 3 ? data[mode[1]].groups?.[mode[2]].name : data[mode[1]].name) ?? '';
};

export const ConfluenceChatComponent = ({
  messages,
  isLoading,
  updateConfluenceMode,
  confluenceMode,
  confluencePrompt,
  clearChat,
  updateSystemMessage,
  addUserMessage,
  confluenceParents,
  updateCurrentParents,
  formData,
}: any) => {
  const studio = formData[FormDataKeys.CP_CONFLUENCE_STUDIO];
  const modeRef = useRef(confluenceMode);

  const getNextMode = () => {
    const data = MOCK_CONF_CONFLUENCE[studio].groups[confluenceMode[0]].groups;
    if (confluenceMode.length === 2) {
      const nextMode = confluenceMode[1] + 1;
      if (nextMode >= data.length) {
        return null;
      }
      return [confluenceMode[0], nextMode, ...(data[nextMode].groups ? [0] : [])];
    }
    if (confluenceMode.length === 3) {
      const sub = data[confluenceMode[1]].groups!;
      let nextMode = confluenceMode[2] + 1;
      if (nextMode >= sub.length) {
        nextMode = confluenceMode[1] + 1;
        if (nextMode >= data.length) {
          return null;
        }
        updateCurrentParents([confluenceParents[0]]);
        return [confluenceMode[0], nextMode, ...(data[nextMode].groups ? [0] : [])];
      }
      return [confluenceMode[0], confluenceMode[1], nextMode];
    }
    return null;
  };

  const handleSkip = () => updateConfluenceMode(getNextMode());

  const handleCreatePage = async () => {
    if (messages.length < 2) {
      return;
    }

    let parent = confluenceParents[confluenceParents.length - 1];
    if (confluenceParents.length === 1 && confluenceMode.length === 3) {
      const groupData = MOCK_CONF_CONFLUENCE[studio].groups[confluenceMode[0]].groups![confluenceMode[1]];
      const data = await connectApi
        .createPage(formData[FormDataKeys.CP_CONFLUENCE_SPACE], groupData.name, '', parent)
        .catch(() => {
          window.AP.flag.create({
            title: 'Error',
            body: 'There was an error creating the parent page...',
            type: 'error',
            close: 'auto',
          });
        });
      if (typeof data !== 'object') {
        return;
      }
      parent = data.id;
      updateCurrentParents([...confluenceParents, parent]);
    }

    connectApi
      .createPage(
        formData[FormDataKeys.CP_CONFLUENCE_SPACE],
        getPageTitle(studio, confluenceMode),
        messages[messages.length - 1].message,
        parent ?? undefined,
      )
      .then(() => updateConfluenceMode(getNextMode()))
      .catch(() => {
        window.AP.flag.create({
          title: 'Error',
          body: 'There was an error creating the page...',
          type: 'error',
          close: 'auto',
        });
      });
  };

  useEffect(() => {
    if (JSON.stringify(confluenceMode) === JSON.stringify(modeRef.current)) {
      return;
    }
    modeRef.current = confluenceMode;
    clearChat();
    updateSystemMessage(getSystemPrompt(studio, confluenceMode));
    addUserMessage({
      message: confluencePrompt,
      isGpt: false,
    });
  }, [confluenceMode]);

  const buttonEnabled = !isLoading && messages.length >= 2;
  return (
    <>
      <Chat emptyText="Ask AlexGPT+ to create your page..." placeholder="Write your ideas..." />

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginX: '24px', marginTop: '2px' }}>
        <Button
          disabled={isLoading}
          onClick={handleSkip}
          sx={{
            backgroundColor: 'transparent',
            color: '#000',
            flex: 1,
            marginRight: 1,
          }}
        >
          Skip
        </Button>
        <Button
          disabled={!buttonEnabled}
          onClick={handleCreatePage}
          sx={{
            backgroundColor: '#004993',
            color: '#fff',
            flex: 1,
            marginLeft: 1,
          }}
        >
          Send to Confluence
        </Button>
      </Box>
    </>
  );
};

export const ConfluenceChat = connect(mapStateToProps, mapDispatchToProps)(ConfluenceChatComponent);
