import { Box, SxProps, Typography } from '@mui/material';

import { CELL_HEIGHT, MONTHS, RoadmapMvp } from './types';
import { getDayDiff, getEndDate, getMonthDiff, getStartDate } from './utils';

interface Props {
  mvps: RoadmapMvp[];
}

const periodCell: SxProps<any> = {
  display: 'grid',
  gridAutoFlow: 'column',
  width: '100%',
  gridTemplateColumns: 'repeat(2, 1fr)',
  textAlign: 'center',
  height: `${CELL_HEIGHT}px`,
  position: 'relative',
};

const createMonthsRow = (startMonth: number, totalMonths: number) => {
  const rows = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < totalMonths; i++) {
    rows.push(
      <Box sx={periodCell}>
        <Typography
          color="white"
          sx={{
            backgroundColor: '#075BBD',
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {MONTHS[(startMonth + i) % 12]}
        </Typography>
      </Box>,
    );
  }

  return rows;
};

const getMonthColumn = (key: string, filled: boolean) => (
  <Box
    key={key}
    sx={{ position: 'relative', outline: 'none', backgroundColor: filled ? '#f7f7f7' : 'white', marginBottom: '-6px' }}
  />
);

export const TaskTable = ({ mvps }: Props) => {
  const startDate = getStartDate(mvps);
  const endDate = getEndDate(mvps);
  const totalMonths = getMonthDiff(startDate, endDate) + 1;

  const taskRows: JSX.Element[] = [];
  mvps.forEach((mvp) => {
    mvp.epics.forEach((epic) => {
      const taskDate = new Date(startDate);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < totalMonths; i++) {
        const currentYear = taskDate.getFullYear();
        const currentMonth = taskDate.getMonth() + 1;
        const currentRow = [];

        currentRow.push(getMonthColumn(`${currentYear}-${currentMonth}-1`, true));
        currentRow.push(getMonthColumn(`${currentYear}-${currentMonth}-2`, false));

        if (
          epic.from.startsWith(`${currentYear}-${currentMonth}`) ||
          epic.from.startsWith(`${currentYear}-0${currentMonth}`)
        ) {
          const monthDays = new Date(currentYear, currentMonth, 0).getDate();
          currentRow.push(
            <Box
              sx={{
                position: 'absolute',
                height: `${CELL_HEIGHT - 1}px`,
                zIndex: 1,
                backgroundColor: '#59A5FF',
                borderRadius: '10px',
                width: `calc(${getDayDiff(epic.from, epic.to) - 1} * 100% / ${monthDays})`,
                left: `calc(100% * ${getDayDiff(`${currentYear}-${currentMonth}-01`, epic.from) - 1} / ${monthDays})`,
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                paddingX: 1,
              }}
            >
              <Typography
                color="white"
                fontWeight={700}
                fontSize={14}
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overflow="hidden"
              >
                {epic.epicName}
              </Typography>
            </Box>,
          );
        }

        taskRows.push(
          <Box key={`${i}-${mvp.mvp}-${epic.epicName}-${currentYear}-${currentMonth}`} sx={periodCell}>
            {currentRow}
          </Box>,
        );

        taskDate.setMonth(taskDate.getMonth() + 1);
      }
    });
  });

  return (
    <Box sx={{ display: 'grid', overflowX: 'auto', gridTemplateColumns: `repeat(${totalMonths}, 1fr)`, marginTop: 1 }}>
      {createMonthsRow(startDate.getMonth(), totalMonths)}
      {taskRows}
    </Box>
  );
};
