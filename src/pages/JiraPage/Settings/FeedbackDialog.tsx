import { Button, Dialog, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, useState } from 'react';
import { connect } from 'react-redux';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
    // eslint-disable-next-line react/jsx-props-no-spreading
  ) => <Slide direction="up" ref={ref} {...props} />,
);

export const FeedbackDialogComponent = ({ settingName, show, onClose }: any) => {
  const [feedback, setFeedback] = useState('');
  return (
    <Dialog
      open={show}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        style: { backgroundColor: '#f4f4f4', color: 'black', justifyContent: 'center', padding: '24px 64px' },
      }}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ textAlign: 'center', whiteSpace: 'break-spaces' }}>{`${settingName} \nFeedback`}</DialogTitle>
      <DialogContent sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <TextField
          value={feedback}
          onChange={(ev) => setFeedback(ev.target.value)}
          multiline
          rows={6}
          placeholder="How could we improve this feature?"
          fullWidth
          sx={{
            textarea: {
              color: '#000',
              background: '#f8f8f8',
              borderRadius: '8px',
              paddingX: '12px',
              paddingY: '8px',
              border: '1px solid rgba(0, 0, 0, .5)',
            },
            fieldset: {
              border: 'none',
            },
          }}
        />

        <Button
          sx={{
            backgroundColor: '#004993',
            color: '#fff',
            marginTop: '16px',
            borderRadius: '16px',
            width: '80%',
          }}
        >
          Send Feedback
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export const FeedbackDialog = connect()(FeedbackDialogComponent);
