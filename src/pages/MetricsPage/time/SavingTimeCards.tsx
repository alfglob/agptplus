import { Alarm, Article, Engineering, Timer, Today } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

interface Props {
  model: string;
  userStories: number;
  avgTime: number;
}

const Card = ({ children, color, borderColor, sx }: any) => (
  <Box
    sx={{
      width: '100%',
      height: '104px',
      backgroundColor: color,
      border: `1px solid ${borderColor}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      ...sx,
    }}
  >
    {children}
  </Box>
);

export const SavingTimeCards = ({ model, userStories, avgTime }: Props) => {
  const modelTime = Math.ceil(avgTime / 4);
  const hours = userStories * avgTime;
  const modelHours = userStories * modelTime;
  const months = Math.ceil(hours / 160);
  const modelMonths = Math.ceil(modelHours / 160);

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', columnGap: 3, rowGap: 3 }}>
      <Card color="rgba(155, 81, 224, 0.2)" borderColor="#9B51E0">
        <Typography color="black">Standard</Typography>
      </Card>
      <Card color="rgba(155, 81, 224, 0.2)" borderColor="#9B51E0">
        <Article htmlColor="black" />
        <Typography color="black">{`${userStories} US`}</Typography>
      </Card>
      <Card color="rgba(155, 81, 224, 0.2)" borderColor="#9B51E0">
        <Timer htmlColor="black" />
        <Typography color="black">{`${avgTime} minutes`}</Typography>
      </Card>
      <Card color="rgba(155, 81, 224, 0.2)" borderColor="#9B51E0">
        <Alarm htmlColor="black" />
        <Typography color="black">{`${hours} hours`}</Typography>
      </Card>
      <Card color="rgba(155, 81, 224, 0.2)" borderColor="#9B51E0">
        <Today htmlColor="black" />
        <Typography color="black">{`${months} months`}</Typography>
      </Card>
      <Card color="rgba(155, 81, 224, 0.2)" borderColor="#9B51E0">
        <Engineering htmlColor="black" />
        <Typography color="black">{`1 FTE - ${months} months`}</Typography>
      </Card>
      <Card color="#15D6B3" borderColor="#9B51E0">
        <Typography color="black">{model}</Typography>
      </Card>
      <Card color="#15D6B3" borderColor="#9B51E0">
        <Article htmlColor="black" />
        <Typography color="black">{`${userStories} US`}</Typography>
      </Card>
      <Card color="#15D6B3" borderColor="#9B51E0">
        <Timer htmlColor="black" />
        <Typography color="black">{`${modelTime} minutes`}</Typography>
      </Card>
      <Card color="#15D6B3" borderColor="#9B51E0">
        <Alarm htmlColor="black" />
        <Typography color="black">{`${modelHours} hours`}</Typography>
      </Card>
      <Card color="#15D6B3" borderColor="#9B51E0">
        <Today htmlColor="black" />
        <Typography color="black">{`${modelMonths} months`}</Typography>
      </Card>
      <Card color="#15D6B3" borderColor="#9B51E0">
        <Engineering htmlColor="black" />
        <Typography color="black">{`1 FTE - ${modelMonths} months`}</Typography>
      </Card>
      <Card color="rgba(185, 248, 8, 0.2)" borderColor="#9B51E0">
        <Typography color="black">Saving</Typography>
      </Card>
      <Card color="rgba(185, 248, 8, 0.2)" borderColor="#9B51E0">
        <Article htmlColor="black" />
        <Typography color="black">{`${userStories} US`}</Typography>
      </Card>
      <Card color="rgba(185, 248, 8, 0.2)" borderColor="#9B51E0">
        <Timer htmlColor="black" />
        <Typography color="black">{`${avgTime - modelTime} minutes`}</Typography>
      </Card>
      <Card color="rgba(185, 248, 8, 0.2)" borderColor="#9B51E0">
        <Alarm htmlColor="black" />
        <Typography color="black">{`${hours - modelHours} hours`}</Typography>
      </Card>
      <Card color="rgba(185, 248, 8, 0.2)" borderColor="#9B51E0">
        <Today htmlColor="black" />
        <Typography color="black">{`${months - modelMonths} months`}</Typography>
      </Card>
      <Card color="rgba(185, 248, 8, 0.2)" borderColor="#9B51E0">
        <Engineering htmlColor="black" />
        <Typography color="black">{`1 FTE - ${months - modelMonths} months`}</Typography>
      </Card>
      <Card
        color="#15D6B3"
        borderColor="#9B51E0"
        sx={{ gridColumnStart: 2, gridColumnEnd: 6, flexDirection: 'column' }}
      >
        <Typography color="black">
          {((months - modelMonths) * 3000).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Typography>
        <Typography color="black">{`${months - modelMonths} months`}</Typography>
      </Card>
    </Box>
  );
};
