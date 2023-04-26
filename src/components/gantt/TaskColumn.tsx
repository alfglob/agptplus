import { Box, SxProps, Typography } from '@mui/material';

import { CELL_HEIGHT, RoadmapMvp } from './types';

interface Props {
  mvps: RoadmapMvp[];
}

const taskRow: SxProps<any> = {
  display: 'flex',
  textAlign: 'center',
  border: 'none',
  justifyContent: 'center',
  alignItems: 'center',
};

export const TaskColumn = ({ mvps }: Props) => (
  <Box sx={{ marginTop: 1, marginRight: 1 }}>
    <Box sx={{ ...taskRow, height: `${CELL_HEIGHT}px` }} />
    {mvps.map((mvp) => (
      <Box
        sx={{
          ...taskRow,
          height: `${CELL_HEIGHT * mvp.epics.length}px`,
          backgroundColor: '#075BBD',
          borderRadius: 5,
          marginY: 1,
        }}
      >
        <Typography color="white" textOverflow="ellpsis" overflow="hidden" maxHeight="100%">
          {mvp.mvp}
        </Typography>
      </Box>
    ))}
  </Box>
);
