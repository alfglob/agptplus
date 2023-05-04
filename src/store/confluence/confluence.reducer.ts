import { ConfluenceActionType } from './action.types';

const initialState = {
  confluenceMode: null,
  confluencePrompt: null,
  confluenceParents: null,
};

export const confluenceState = (state: any) => ({
  confluenceMode: state.confluence.confluenceMode,
  confluencePrompt: state.confluence.confluencePrompt,
  confluenceParents: state.confluence.confluenceParents,
});

// eslint-disable-next-line @typescript-eslint/default-param-last
export const confluenceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ConfluenceActionType.UPDATE_MODE:
      return {
        ...state,
        confluenceMode: action.payload,
      };
    case ConfluenceActionType.SET_INITIAL_PROMPT:
      return {
        ...state,
        confluencePrompt: action.payload,
      };
    case ConfluenceActionType.UPDATE_CURRENT_PARENT:
      return {
        ...state,
        confluenceParents: action.payload,
      };
    default:
      return state;
  }
};
