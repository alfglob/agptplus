import { AccountCircle } from '@mui/icons-material';
import {
  Avatar,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { connectApi, JiraUser } from '../../../services/api';

import { mapDispatchToProps, mapStateToProps } from '../../../store';

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

export const JiraPopoverComponent = ({ anchorEl, onClose, updateAssignee, settingKey }: any) => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<JiraUser[]>([]);

  const fetchData = () => {
    if (!query.length) {
      setUsers([]);
      return;
    }
    connectApi
      .findUsersAndGroups(query)
      .then((data) => {
        setUsers(data.users.users.filter((user) => user.accountType === 'atlassian'));
      })
      .catch(() => {
        window.AP.flag.create({
          title: 'Error',
          body: 'There was an error searching for users...',
          type: 'error',
          close: 'auto',
        });
      });
  };

  useEffect(() => {
    if (!users.length) {
      fetchData();
      return () => {};
    }

    const timeout = setTimeout(fetchData, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  const onSelect = (value: JiraUser | null) => {
    updateAssignee({ key: settingKey, value });
    onClose();
  };

  return (
    <Popover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        sx: {
          backgroundColor: '#f4f4f4',
          display: 'flex',
          flexDirection: 'column',
          color: '#000',
          width: 286,
          height: 286,
        },
      }}
    >
      <TextField
        sx={{
          input: {
            color: '#000',
            borderRadius: '8px',
            maxHeight: '24px',
            paddingX: '12px',
            paddingY: '8px',
          },
          fieldset: {
            border: 'none',
          },
        }}
        size="small"
        placeholder="Search user..."
        value={query}
        onChange={(ev) => setQuery(ev.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle htmlColor="gray" />
            </InputAdornment>
          ),
        }}
      />
      <List sx={{ height: '100%', overflowY: 'auto' }}>
        <ListItem onClick={() => onSelect(null)} disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText primary="None" />
          </ListItemButton>
        </ListItem>
        {!!users.length &&
          users.map((user) => (
            <ListItem key={user.accountId} onClick={() => onSelect(user)} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <Avatar src={user.avatarUrl} {...(!user.avatarUrl ? stringAvatar(user.displayName) : {})} />
                </ListItemAvatar>
                <ListItemText
                  primary={user.displayName}
                  primaryTypographyProps={{
                    style: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Popover>
  );
};

export const JiraPopover = connect(mapStateToProps, mapDispatchToProps)(JiraPopoverComponent);
