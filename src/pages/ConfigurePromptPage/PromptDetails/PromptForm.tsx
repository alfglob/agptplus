import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Button, IconButton, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { PromptSimpleField } from './PromptSimpleField';

import { MOCK_CONF_PROMPT_DATA } from '../../../assets/mock/mock-data';
import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { FormDataKeys } from '../../../store/form/action.types';
import { EpicKPI } from '../Extras/EpicKPI';
import { InitiativeRoadmap } from '../Extras/InitiativeRoadmap';
import { SettingsContainer } from '../Settings/SettingsContainer';

function getExtraName(key: string) {
  if (key === MOCK_CONF_PROMPT_DATA.epic.id) {
    return 'Show the KPI for the epic';
  }
  if (key === MOCK_CONF_PROMPT_DATA.initiative.id) {
    return 'Show the roadmap for the initiative';
  }
  return null;
}

export const PromptFormComponent = ({ system, updateSystemMessage, formData, updateField, messages }: any) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showExtra, setShowExtra] = useState(false);

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

  // Temp
  useEffect(() => {
    updateSystemMessage(MOCK_CONF_PROMPT_DATA['ui-engineering'].prompt);
    updateField({ key: FormDataKeys.CP_SYSTEM, value: MOCK_CONF_PROMPT_DATA['ui-engineering'].id });
  }, []);

  const currentKey = formData[FormDataKeys.CP_SYSTEM];
  const extraName = getExtraName(currentKey);

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
            return (MOCK_CONF_PROMPT_DATA as any)[val]?.display_name;
          }}
          displayEmpty
          size="small"
          value={currentKey ?? ''}
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

      {!!extraName && (
        <Button
          onClick={() => setShowExtra(true)}
          disabled={messages?.length === 0}
          sx={{
            gridColumn: 'span 1 / span 1',
            '@media (max-width: 780px)': {
              gridColumn: 'span 4 / span 4',
            },
            backgroundColor: '#904EE2',
            color: '#fff',
          }}
        >
          {extraName}
        </Button>
      )}
      {currentKey === MOCK_CONF_PROMPT_DATA.epic.id && <EpicKPI show={showExtra} onClose={() => setShowExtra(false)} />}
      {currentKey === MOCK_CONF_PROMPT_DATA.initiative.id && (
        <InitiativeRoadmap show={showExtra} onClose={() => setShowExtra(false)} />
      )}
    </Box>
  );
};

export const PromptForm = connect(mapStateToProps, mapDispatchToProps)(PromptFormComponent);
