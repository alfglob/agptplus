import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

import { connect } from 'react-redux';

import { mapStateToProps } from '../../../store';

interface Props {
  value: string;
  setValue: (value: string) => any;
  placeholder: string;
}

export const PromptSimpleFieldComponent = ({ value, setValue, placeholder }: Props) => {
  const handleFieldChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target!.value);
  };
  return (
    <TextField
      sx={{
        input: {
          color: '#fff',
          background: '#004993',
          borderRadius: '8px',
          maxHeight: '24px',
          paddingX: '12px',
          paddingY: '8px',
        },
        fieldset: {
          border: 'none',
        },
        gridColumn: 'span 1 / span 1',
        '@media (max-width: 780px)': {
          gridColumn: 'span 3 / span 3',
        },
      }}
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={handleFieldChange}
    />
  );
};

export const PromptSimpleField = connect(mapStateToProps)(PromptSimpleFieldComponent);
