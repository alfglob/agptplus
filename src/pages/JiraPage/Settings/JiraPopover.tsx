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

import { JiraAvatar } from './JiraAvatar';

import { appApi, JiraUser } from '../../../services/api';

import { mapDispatchToProps, mapStateToProps } from '../../../store';

export const JiraPopoverComponent = ({ anchorEl, onClose, value, onChange }: any) => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<JiraUser[]>([]);

  const fetchData = () => {
    if (!query.length) {
      setUsers([]);
      return;
    }
    appApi
      .findUsersAndGroups(query)
      .then((data) => {
        setUsers(
          data.data.users.users.filter(
            (user: JiraUser) => user.accountType === 'atlassian' && user.accountId !== value?.accountId,
          ),
        );
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

  const onSelect = (val: JiraUser | null) => {
    // updateAsignee({ key: settingKey, value });
    onChange(val);
    setQuery('');
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
          <ListItemButton selected={!value}>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText primary="None" />
          </ListItemButton>
        </ListItem>
        {!!value && (
          <ListItem onClick={onClose} disablePadding>
            <ListItemButton selected>
              <ListItemAvatar>
                <JiraAvatar user={value} />
              </ListItemAvatar>
              <ListItemText
                primary={value.displayName}
                primaryTypographyProps={{
                  style: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' },
                }}
              />
            </ListItemButton>
          </ListItem>
        )}
        {!!users.length &&
          users.map((user) => (
            <ListItem key={user.accountId} onClick={() => onSelect(user)} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <JiraAvatar user={user} />
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
