import { Box, MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';

import { connect } from 'react-redux';

import { SpaceSelector } from './SpaceSelector';

import { MOCK_CONF_CONFLUENCE_PROMPT_DATA, MOCK_CONF_PROJECT_SETUP } from '../../../assets/mock/mock-data';
import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { FormDataKeys } from '../../../store/form/action.types';

export const PromptFormComponent = ({ system, updateSystemMessage, formData, updateField }: any) => {
  const handleSelect = (ev: any) => {
    const studio = ev.target.value;
    const data = (MOCK_CONF_CONFLUENCE_PROMPT_DATA as any)[studio];
    if (!studio) {
      return;
    }
    if (system.current !== data.prompt) {
      updateSystemMessage(data.prompt);
    }
    updateField({ key: FormDataKeys.CP_SYSTEM, value: studio });
  };

  const handleConfluenceStudioSelect = (ev: any) => {
    const studio = ev.target.value;
    const data = MOCK_CONF_PROJECT_SETUP[studio];
    if (!studio) {
      return;
    }
    updateField({ key: FormDataKeys.CP_CONFLUENCE_STUDIO, value: data.id });
  };

  // Temp
  useEffect(() => {
    updateSystemMessage(MOCK_CONF_CONFLUENCE_PROMPT_DATA['project-setup'].prompt);
    updateField({ key: FormDataKeys.CP_SYSTEM, value: MOCK_CONF_CONFLUENCE_PROMPT_DATA['project-setup'].id });
  }, []);

  const currentKey = formData[FormDataKeys.CP_SYSTEM];

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
              return 'Select an action';
            }
            return (MOCK_CONF_CONFLUENCE_PROMPT_DATA as any)[val]?.display_name;
          }}
          displayEmpty
          size="small"
          value={currentKey ?? ''}
          onChange={handleSelect}
        >
          {Object.values(MOCK_CONF_CONFLUENCE_PROMPT_DATA).map((value) => (
            <MenuItem key={value.id} value={value.id} onClick={handleSelect}>
              {value.display_name}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <SpaceSelector
        placeholder="Space"
        value={formData[FormDataKeys.CP_CONFLUENCE_SPACE] ?? ''}
        onSpaceSelect={(space) => {
          updateField({ key: FormDataKeys.CP_CONFLUENCE_SPACE, value: space.id });
        }}
      />
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
          return MOCK_CONF_PROJECT_SETUP[val]?.display_name ?? 'Select a studio';
        }}
        displayEmpty
        size="small"
        value={formData[FormDataKeys.CP_CONFLUENCE_STUDIO] ?? ''}
        onChange={handleConfluenceStudioSelect}
      >
        {Object.values(MOCK_CONF_PROJECT_SETUP).map((value) => (
          <MenuItem key={value.id} value={value.id} onClick={handleConfluenceStudioSelect}>
            {value.display_name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export const PromptForm = connect(mapStateToProps, mapDispatchToProps)(PromptFormComponent);
