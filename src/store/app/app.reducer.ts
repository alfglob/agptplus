import { AppActionType } from './action.types';

export enum AppMode {
  CONFIGURE_PROMPT_MODE = 'CONFIGURE_PROMPT_MODE',
}

const initialState = {
  mode: AppMode.CONFIGURE_PROMPT_MODE,
};

export const appState = (state: any) => ({
  appMode: state.app.mode,
});

// eslint-disable-next-line @typescript-eslint/default-param-last
export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AppActionType.SET_APP_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
