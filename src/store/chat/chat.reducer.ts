import { v4 as uuidv4 } from 'uuid';

import { ChatActionTypes } from './action.types';

const initialState = {
  messages: [],
  isLoading: false,
  system: {
    current: '',
    shouldUpdate: false,
  },
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const chatReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ChatActionTypes.CLEAR_CHAT:
      return { messages: [], system: initialState.system };
    case ChatActionTypes.ADD_EXAMPLE:
      return {
        messages: [...state.messages, { ...{ message: action.payload[1].content, isGpt: false }, id: uuidv4() }],
      };
    case ChatActionTypes.ADD_USER_MESSAGE:
      return { messages: [...state.messages, { ...action.payload, id: uuidv4() }], system: state.system };
    case ChatActionTypes.ASK_OPEN_AI:
      return { ...state, isLoading: true, system: { ...state.system, shouldUpdate: false } };
    case ChatActionTypes.ASK_OPEN_AI_SUCCESS:
      return { messages: [...state.messages, { ...action.payload }], isLoading: false, system: state.system };
    case ChatActionTypes.UPDATE_SYSTEM_MESSAGE:
      return { ...state, system: { current: action.payload, shouldUpdate: true } };
    case ChatActionTypes.UPDATE_GPT_MESSAGE:
      // eslint-disable-next-line no-case-declarations
      const messages = [...(state.messages as { id: string; message: string; isGpt: boolean }[])];
      messages[messages.length - 1].message = action.payload;
      return { ...state, messages };
    case ChatActionTypes.SET_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};
