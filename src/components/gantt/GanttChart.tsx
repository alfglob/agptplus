import { Timeline } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { TaskColumn } from './TaskColumn';
import { TaskTable } from './TaskTable';
import { RoadmapMvp } from './types';

interface Props {
  mvps: RoadmapMvp[];
}

export const GanttChart = ({ mvps }: Props) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '1px dashed black',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '150px',
          marginRight: '8px',
          marginLeft: 1,
        }}
      >
        <Timeline htmlColor="black" />
        <Typography color="black" fontWeight={700} marginLeft={1}>
          Roadmap
        </Typography>
      </Box>
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: '150px 1fr', position: 'relative' }}>
      <TaskColumn mvps={mvps} />
      <TaskTable mvps={mvps} />
    </Box>
  </Box>
);
