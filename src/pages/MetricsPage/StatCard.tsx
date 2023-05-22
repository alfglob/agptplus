import { Box, Typography } from '@mui/material';

interface Props {
  value: number;
  label: string;
  icon: JSX.Element;
  // eslint-disable-next-line react/require-default-props
  suffix?: string;
}

export const StatCard = ({ value, label, icon, suffix }: Props) => (
  <Box sx={{ padding: 1.5, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <Box
      sx={{
        backgroundColor: '#EFF6FF',
        borderRadius: 3,
        width: '54px',
        height: '54px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {icon}
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
      <Typography sx={{ color: '#64748B', fontWeight: 500, fontSize: 16 }}>{label}</Typography>
      <Typography sx={{ color: '#0F172A', fontWeight: 500, fontSize: 20 }}>{`${value} ${suffix ?? ''}`}</Typography>
    </Box>
  </Box>
);
