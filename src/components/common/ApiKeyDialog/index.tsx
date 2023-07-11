import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';

export const ApiKeyDialogComponent = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiType, setApiType] = useState(0);
  const [apiKeySet, setApiKeySet] = useState(localStorage.getItem('AI_KEY') ?? sessionStorage.getItem('AI_KEY'));

  const handleSubmit = () => {
    if (!apiKey.length) {
      return;
    }

    try {
      localStorage.setItem('API_TYPE', apiType ? 'azure' : 'openai');
      localStorage.setItem('AI_KEY', apiKey);
    } catch (e) {
      sessionStorage.setItem('API_TYPE', apiType ? 'azure' : 'openai');
      sessionStorage.setItem('AI_KEY', apiKey);
    } finally {
      setApiKeySet('ok');
    }
  };

  return (
    <Dialog open={!apiKeySet}>
      <DialogTitle>Insert your API key</DialogTitle>
      <DialogContent>
        <Typography>
          <b>AlexGPT+ </b>
          is currently in a closed beta, to use the application at the moment, you will need an OpenAI API key.
        </Typography>
        <Typography marginY={2}>
          You can get one at:
          <a href="https://platform.openai.com/account/api-keys"> https://platform.openai.com/account/api-keys </a>
          or in
          <a href="https://portal.azure.com"> https://portal.azure.com</a>
        </Typography>
        <Tabs
          value={apiType}
          onChange={(ev, val) => {
            setApiType(val);
          }}
          aria-label="ai provider"
          sx={{
            width: '80%',
            my: 2,
          }}
        >
          <Tab label="openai" />
          <Tab label="azure" />
        </Tabs>
        <TextField
          value={apiKey}
          onChange={(ev) => setApiKey(ev.target.value)}
          fullWidth
          sx={{ fieldset: { borderColor: '#c4c4c4' } }}
          size="small"
          placeholder="Insert your API key"
        />
      </DialogContent>

      <DialogActions>
        <Button variant="contained" disabled={!apiKey.length} onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const ApiKeyDialog = connect()(ApiKeyDialogComponent);
