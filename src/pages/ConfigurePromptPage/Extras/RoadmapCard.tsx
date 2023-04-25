import { Check } from '@mui/icons-material';
import Close from '@mui/icons-material/Close';
import Edit from '@mui/icons-material/Edit';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';

import { mapDispatchToProps, mapStateToProps } from '../../../store';

export const RoadmapCardComponent = ({ index, roadmap, updateRoadmap }: any) => {
  const currentRoadmap = roadmap[index];

  const [edit, setEdit] = useState(false);
  const [mvp, setMvp] = useState(currentRoadmap.mvp);
  const [epics, setEpics] = useState(currentRoadmap.epics);

  const onEdit = () => {
    if (!edit) {
      setEdit(true);
      return;
    }

    const clone = [...roadmap];
    clone[index] = { ...currentRoadmap, mvp, epics };
    updateRoadmap(clone);
    setEdit(false);
  };

  const onCancel = () => {
    setMvp(currentRoadmap.mvp);
    setEpics(currentRoadmap.epics);
    setEdit(false);
  };

  const onDelete = () => {
    const clone = [...roadmap];
    clone.splice(index, 1);
    updateRoadmap(clone);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f6fa',
        width: '100%',
        borderRadius: '10px',
        paddingX: '24px',
        paddingY: '8px',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        columnGap: '8px',
      }}
    >
      <IconButton
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: '#AAB2CB',
          width: 86,
          height: 86,
          label: { display: 'flex', flexDirection: 'column' },
        }}
        onClick={onEdit}
      >
        {!edit && <Edit fontSize="large" />}
        {edit && <Check fontSize="large" />}
      </IconButton>

      {edit && (
        <IconButton
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: '#AAB2CB',
            width: 86,
            height: 86,
            label: { display: 'flex', flexDirection: 'column' },
          }}
          onClick={onCancel}
        >
          <Close fontSize="large" />
        </IconButton>
      )}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography color="black" fontWeight={700}>{`MVP ${index + 1}`}</Typography>
        {!edit && <Typography color="black">{mvp}</Typography>}
        {edit && (
          <TextField
            value={mvp}
            onChange={(ev) => setMvp(ev.target.value)}
            sx={{
              flex: 1,
              fieldset: { border: 'none' },
              input: {
                color: 'black',
              },
            }}
          />
        )}
        <Typography color="black" fontWeight={700} sx={{ marginTop: 1 }}>
          Epics
        </Typography>
        {!edit && <Typography color="black">{epics}</Typography>}
        {edit && (
          <TextField
            multiline
            value={epics}
            onChange={(ev) => setEpics(ev.target.value)}
            sx={{
              flex: 1,
              fieldset: { border: 'none' },
              textarea: {
                color: 'black',
              },
            }}
          />
        )}
      </Box>
      {/* {!edit && (
        <Typography color="black" sx={{ flex: 1 }} fontSize={16} fontFamily="Arial">
          {summary}
        </Typography>
      )}
      {edit && (
        <TextField
          multiline
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          sx={{
            flex: 1,
            fieldset: { border: 'none' },
            textarea: {
              color: 'black',
            },
          }}
        />
      )} */}
      <IconButton
        sx={{
          color: '#AAB2CB',
          width: 45,
          height: 45,
        }}
        onClick={onDelete}
      >
        <Close />
      </IconButton>
    </Box>
  );
};

export const RoadmapCard = connect(mapStateToProps, mapDispatchToProps)(RoadmapCardComponent);
