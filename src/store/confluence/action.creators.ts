import { ConfluenceActionType } from './action.types';

export const init = () => ({
  confluenceMode: null,
  confluencePrompt: null,
  confluenceParents: null,
});

export const updateConfluenceMode = (payload: any) => ({
  type: ConfluenceActionType.UPDATE_MODE,
  payload,
});

export const setConfluencePrompt = (payload: any) => ({
  type: ConfluenceActionType.SET_INITIAL_PROMPT,
  payload,
});

export const updateCurrentParents = (payload: any) => ({
  type: ConfluenceActionType.UPDATE_CURRENT_PARENT,
  payload,
});

export const confluenceActions = (dispatch: any) => ({
  updateConfluenceMode: (payload: any) => dispatch(updateConfluenceMode(payload)),
  setConfluencePrompt: (payload: any) => dispatch(setConfluencePrompt(payload)),
  updateCurrentParents: (payload: any) => dispatch(updateCurrentParents(payload)),
});
