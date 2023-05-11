import { Check, Groups } from '@mui/icons-material';
import Close from '@mui/icons-material/Close';
import Edit from '@mui/icons-material/Edit';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';

import { mapDispatchToProps, mapStateToProps } from '../../../store';
import { JiraAvatar } from '../Settings/JiraAvatar';
import { JiraPopover } from '../Settings/JiraPopover';

export const KPICardComponent = ({ index, kpi, updateKpiAsignee, updateKpi }: any) => {
  const [assigneeEl, setAssigneEl] = useState<EventTarget | null>(null);
  const currentKpi = kpi[index];

  const [edit, setEdit] = useState(false);
  const [summary, setSummary] = useState(currentKpi.summary);
  const [value, setValue] = useState(currentKpi.value);

  const onEdit = () => {
    if (!edit) {
      setEdit(true);
      return;
    }

    const clone = [...kpi];
    clone[index] = { ...currentKpi, summary, value };
    updateKpi(clone);
    setEdit(false);
  };

  const onCancel = () => {
    setSummary(currentKpi.summary);
    setValue(currentKpi.value);
    setEdit(false);
  };

  const onDelete = () => {
    const clone = [...kpi];
    clone.splice(index, 1);
    updateKpi(clone);
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
      {!edit && (
        <Typography color="#1F64FF" fontSize={26} fontFamily="Arial">
          {value}
        </Typography>
      )}
      {edit && (
        <TextField
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          sx={{
            fieldset: { border: 'none' },
            width: '85px',
            input: { color: '#1F64FF', fontSize: 26 },
          }}
        />
      )}
      {!edit && (
        <IconButton
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: '#1F64FF',
            width: 86,
            height: 86,
            label: { display: 'flex', flexDirection: 'column' },
          }}
          onClick={(ev) => setAssigneEl(ev.target)}
        >
          {!currentKpi.asignee && <Groups fontSize="large" />}
          {!!currentKpi.asignee && <JiraAvatar user={currentKpi.asignee} />}
          <Typography fontSize={10} color="#AAB2CB">
            Asignee
          </Typography>
        </IconButton>
      )}
      <JiraPopover
        anchorEl={assigneeEl}
        onClose={() => setAssigneEl(null)}
        value={currentKpi.asignee}
        onChange={(val: any) => {
          updateKpiAsignee({ key: index, value: val });
        }}
      />
      {!edit && (
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
      )}
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

export const KPICard = connect(mapStateToProps, mapDispatchToProps)(KPICardComponent);
