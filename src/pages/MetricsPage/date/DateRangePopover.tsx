import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRangeOutlined } from '@mui/icons-material';
import { InputAdornment, Popover, TextField } from '@mui/material';

import { useRef, useState } from 'react';
import { DateRange } from 'react-date-range';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const DateRangePopover = (props: any) => {
  const [open, setOpen] = useState(false);
  const anchorEl = useRef<any>(null);

  // eslint-disable-next-line react/destructuring-assignment
  const { startDate, endDate } = props.ranges[0];
  const start = `${MONTHS[startDate.getMonth()]} ${startDate.getDate()}`;
  const end = `${MONTHS[endDate.getMonth()]} ${endDate.getDate()}`;

  return (
    <>
      <TextField
        ref={anchorEl}
        onFocus={(ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          ev.target.blur();
          setOpen(!open);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: 'black' }}>
              <DateRangeOutlined />
            </InputAdornment>
          ),
        }}
        value={`${start} - ${end}`}
        sx={{
          width: 256,
          fieldset: { border: 'none' },
          input: {
            color: 'black',
          },
        }}
        size="small"
      />
      <Popover
        anchorEl={anchorEl.current}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <DateRange {...props} />
      </Popover>
    </>
  );
};
