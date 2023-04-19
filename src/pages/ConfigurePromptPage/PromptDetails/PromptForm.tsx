import SettingsIcon from '@mui/icons-material/Settings';
import { Box, IconButton, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { PromptSimpleField } from './PromptSimpleField';

import { MOCK_CONF_PROMPT_DATA } from '../../../assets/mock/mock-data';
import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { FormDataKeys } from '../../../store/form/action.types';
import { SettingsContainer } from '../Settings/SettingsContainer';

export const PromptFormComponent = ({ messages, system, updateSystemMessage, formData, updateField }: any) => {
  const [showSettings, setShowSettings] = useState(false);

  const parseSpecialElements = (parsers: { [key: string]: (content: string) => string[] }, message: string) => {
    const results: { [key: string]: string[] } = {};
    if (!message.match) {
      return [];
    }
    Object.keys(parsers).forEach((key) => {
      results[key] = parsers[key](message);
    });
    return results;
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.isGpt) {
      parseSpecialElements(MOCK_CONF_PROMPT_DATA['ui-engineering'].parsers, lastMessage.message);
    }
  }, [messages]); // TODO: Remove

  const getFieldUpdater = (key: string) => (value: string) => updateField({ key, value });

  const handleSelect = (ev: any) => {
    const studio = ev.target.value;
    const data = (MOCK_CONF_PROMPT_DATA as any)[studio];
    if (!studio) {
      return;
    }
    if (system.current !== data.prompt) {
      updateSystemMessage(data.prompt);
    }
    updateField({ key: FormDataKeys.CP_SYSTEM, value: studio });
  };

  // console.log('Current val', formData[FormDataKeys.CP_SYSTEM]);

  return (
    <Box
      sx={{
        width: '100%',
        paddingX: '18px',
        marginY: '2px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        columnGap: '16px',
        rowGap: '14px',
      }}
    >
      <SettingsContainer show={showSettings} onClose={() => setShowSettings(false)} />
      <Box sx={{ gridColumn: 'span 4 / span 4', display: 'flex' }}>
        <Select
          sx={{
            fieldset: {
              border: 'none',
              color: '#fff',
              background: '#004993',
              borderRadius: '8px',
              paddingX: '12px',
              paddingY: '8px',
            },
            div: {
              color: '#fff',
              zIndex: 1,
            },
            root: {
              padding: 0,
            },
            flexGrow: 1,
          }}
          renderValue={(val) => {
            if (!val?.length) {
              return 'Select a studio';
            }
            return (MOCK_CONF_PROMPT_DATA as any)[val].display_name;
          }}
          displayEmpty
          size="small"
          value={formData[FormDataKeys.CP_SYSTEM] ?? ''}
          onChange={handleSelect}
        >
          {Object.values(MOCK_CONF_PROMPT_DATA).map((value) => (
            <MenuItem key={value.id} value={value.id} onClick={handleSelect}>
              {value.display_name}
            </MenuItem>
          ))}
        </Select>
        <IconButton sx={{ width: 38, height: 38, marginLeft: 2 }} color="primary" onClick={() => setShowSettings(true)}>
          <SettingsIcon />
        </IconButton>
      </Box>

      <PromptSimpleField
        placeholder="Jira ID"
        value={formData[FormDataKeys.CP_JIRA_ID] ?? ''}
        setValue={getFieldUpdater(FormDataKeys.CP_JIRA_ID)}
      />
      <PromptSimpleField
        placeholder="US Type (Front/Backend/Data)"
        value={formData[FormDataKeys.CP_US_TYPE] ?? ''}
        setValue={getFieldUpdater(FormDataKeys.CP_US_TYPE)}
      />
      <PromptSimpleField
        placeholder="Issue Type (US/Task/Epic)"
        value={formData[FormDataKeys.CP_ISSUE_TYPE] ?? ''}
        setValue={getFieldUpdater(FormDataKeys.CP_ISSUE_TYPE)}
      />
    </Box>
  );
};

export const PromptForm = connect(mapStateToProps, mapDispatchToProps)(PromptFormComponent);
