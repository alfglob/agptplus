import { Avatar } from '@mui/material';

import { JiraUser } from '../../../services/api';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h}, 50%, 70%)`;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

interface Props {
  user: JiraUser;
}

export const JiraAvatar = ({ user }: Props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Avatar src={user.avatarUrl} {...(!user.avatarUrl ? stringAvatar(user.displayName) : {})} />
);
