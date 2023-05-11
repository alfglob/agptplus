import { MenuItem, Select, SelectProps } from '@mui/material';
import { useEffect, useState } from 'react';

import { SpaceData, appApi } from '../../../services/api';

export const SpaceSelector = ({
  sx,
  onSpaceSelect,
  ...rest
}: SelectProps & { onSpaceSelect: (value: SpaceData) => any }) => {
  const [spaces, setSpaces] = useState<SpaceData[]>([]);

  useEffect(() => {
    appApi
      .getSpaceData()
      .then((res) => setSpaces(res.data.results))
      .catch(() => {
        window.AP.flag.create({
          title: 'Error',
          body: 'There was an error searching for spaces...',
          type: 'error',
          close: 'auto',
        });
      });
  }, []);

  return (
    <Select
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      sx={{
        ...sx,
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
        if (!val) {
          return 'Select a space';
        }
        return spaces.find((sp) => sp.id === val)?.name;
      }}
      displayEmpty
      size="small"
    >
      {spaces?.map((value: SpaceData) => (
        <MenuItem key={value.id} value={value.id} onClick={() => onSpaceSelect?.(value)}>
          {value.name}
        </MenuItem>
      ))}
    </Select>
  );
};
