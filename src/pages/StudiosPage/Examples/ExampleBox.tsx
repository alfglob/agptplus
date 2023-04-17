/* eslint-disable react/no-array-index-key */
import { Box, Button } from '@mui/material';
import { connect } from 'react-redux';

import { mapDispatchToProps } from '../../../store';

export const ExampleBoxComponent = ({ examples, shortTitle, title, setOpenExample }: any) => {
  const openExample = (event: any) => {
    const { index } = event.target.dataset;
    setOpenExample(examples[index]);
  };
  return (
    <Box sx={{ display: 'flex', padding: '12px', gap: '16px' }}>
      <Box
        sx={{
          background: '#D8D8D8',
          borderRadius: '12px',
          width: '48px',
          height: '48px',
          fontSize: '24px',
          lineHeight: '48px',
          textAlign: 'center',
          fontWeight: '700',
        }}
      >
        {shortTitle}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ fontWeight: '600', lineHeight: '21px' }}>{title}</Box>
        <Box sx={{ display: 'flex', gap: '8px' }}>
          {examples.map((example: any, index: number) => (
            <Button
              sx={{
                background: index === 0 ? '#FEEBC8' : '#C6F6D5',
                color: index === 0 ? '#DD6B20' : '#38A169',
                padding: '2px 8px',
                fontSize: '12px',
                borderRadius: '12px',
                lineHeight: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                textTransform: 'none',
              }}
              key={`${title}-example-${index}`}
              onClick={openExample}
              data-index={index}
            >
              Example
              {index + 1}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export const ExampleBox = connect(null, mapDispatchToProps)(ExampleBoxComponent);
