import { AppActionType } from './action.types';

export const init = () => ({
  type: AppActionType.APP_INIT,
});

export const setAppMode = (payload: any) => ({
  type: AppActionType.SET_APP_MODE,
  payload,
});

export const appActions = (dispatch: any) => ({
  init: () => dispatch(init()),
  setAppMode: (payload: any) => dispatch(setAppMode(payload)),
});
