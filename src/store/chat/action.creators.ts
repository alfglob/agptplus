import { ChatActionTypes } from './action.types';

export const clearChat = () => ({
  type: ChatActionTypes.CLEAR_CHAT,
});

export const addUserMessage = (payload: any) => ({
  type: ChatActionTypes.ADD_USER_MESSAGE,
  payload,
});

export const addExample = (payload: any) => ({
  type: ChatActionTypes.ADD_EXAMPLE,
  payload,
});

export const askOpenAI = (payload: any) => ({
  type: ChatActionTypes.ASK_OPEN_AI,
  payload,
});

export const askOpenAISuccess = (payload: any) => ({
  type: ChatActionTypes.ASK_OPEN_AI_SUCCESS,
  payload,
});

export const updateSystemMessage = (payload: string) => ({
  type: ChatActionTypes.UPDATE_SYSTEM_MESSAGE,
  payload,
});

export const chatActions = (dispatch: any) => ({
  clearChat: () => dispatch(clearChat()),
  addUserMessage: (payload: any) => dispatch(addUserMessage(payload)),
  addExample: (payload: any) => dispatch(addExample(payload)),
  askOpenAI: (payload: any) => dispatch(askOpenAI(payload)),
  askOpenAISuccess: (payload: any) => dispatch(askOpenAISuccess(payload)),
  updateSystemMessage: (payload: string) => dispatch(updateSystemMessage(payload)),
});

export const chatState = (state: any) => ({
  messages: state.chat.messages || [],
  chatLoading: state.chat.isLoading,
  system: state.chat.system ?? { current: '', shouldUpdate: false },
});
