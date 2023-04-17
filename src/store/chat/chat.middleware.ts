import { askOpenAI, askOpenAISuccess } from './action.creators';
import { ChatActionTypes } from './action.types';

import { getUserStoryRequest } from '../../assets/mock/mock-data';

import { openAIApi } from '../../services/api';
import { mapOpenAIResponse } from '../../utils/mapOpenAIResponse';
import { AppMode } from '../app/app.reducer';

export const chatMiddleware = (store: any) => (next: any) => async (action: any) => {
  next(action);
  switch (action.type) {
    case ChatActionTypes.ADD_EXAMPLE: {
      store.dispatch(askOpenAI(action.payload));
      break;
    }
    case ChatActionTypes.ADD_USER_MESSAGE: {
      const { mode } = store.getState().app;
      const { messages, system } = store.getState().chat;
      const requestMessage = [];

      // Set current system content
      requestMessage.push({
        content: system.current,
        role: 'system',
      });

      if (mode === AppMode.CONFIGURE_PROMPT_MODE) {
        const previousMessages = messages.reduce(
          (curr: any, val: any) => [
            ...curr,
            {
              content: val.message,
              role: val.isGpt ? 'assistant' : 'user',
            },
          ],
          [],
        );
        requestMessage.push(...previousMessages);
      } else {
        requestMessage.push(...getUserStoryRequest(action.payload.message));
      }
      store.dispatch(askOpenAI(requestMessage));
      break;
    }
    case ChatActionTypes.ASK_OPEN_AI: {
      const response = await openAIApi.askOpenAI(action.payload);
      store.dispatch(askOpenAISuccess(mapOpenAIResponse(response)));
      break;
    }
    default:
      break;
  }
};
