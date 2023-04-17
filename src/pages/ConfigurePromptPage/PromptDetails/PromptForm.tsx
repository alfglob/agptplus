import { Box, TextField } from '@mui/material';
import { ChangeEvent, useEffect } from 'react';

import { connect } from 'react-redux';

import { PromptSimpleField } from './PromptSimpleField';

import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { FormDataKeys } from '../../../store/form/action.types';

export const PromptFormComponent = ({ system, updateSystemMessage, formData, updateField }: any) => {
  const handlePromptChange = (ev: ChangeEvent<HTMLInputElement>) => {
    updateField({ key: FormDataKeys.CP_SYSTEM, value: ev.target!.value });
  };

  useEffect(() => {
    const defaultValue =
      'Respond as if you were a product owner. Create a User Story this format: 1. Tittle of the User Story 2. Description ' +
      'with the format "as a user" and Feature and at least 3 Scenario using Gherking. 3.Acceptance criteria 4. Story point ' +
      'and explain why. 5. topics to discuss. 6. Additional Documentation. 7. Unhappy path. 8. Business Value (tangible and ' +
      'intangible benefics a business can get from the capabilities of a product)';
    updateField({
      key: FormDataKeys.CP_SYSTEM,
      value: defaultValue,
    });
    updateSystemMessage(defaultValue);
  }, []);

  const getFieldUpdater = (key: string) => (value: string) => updateField({ key, value });

  const handleBlur = () => {
    if (formData[FormDataKeys.CP_SYSTEM] !== system.current) {
      updateSystemMessage(formData[FormDataKeys.CP_SYSTEM] ?? '');
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        paddingX: '18px',
        marginY: '16px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        columnGap: '16px',
        rowGap: '14px',
      }}
    >
      <TextField
        sx={{
          textarea: {
            color: '#fff',
            background: '#004993',
            borderRadius: '8px',
            maxHeight: '35px',
            overflow: 'scroll !important',
            paddingX: '12px',
            paddingY: '8px',
          },
          fieldset: {
            border: 'none',
          },
          root: {
            padding: 0,
          },
          gridColumn: 'span 3 / span 3',
        }}
        size="small"
        InputProps={{ style: { padding: 0 } }}
        placeholder="Write your prompt for create User Story"
        value={formData[FormDataKeys.CP_SYSTEM] ?? ''}
        multiline
        onChange={handlePromptChange}
        onBlur={handleBlur}
      />
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
