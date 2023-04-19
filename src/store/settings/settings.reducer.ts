import { SettingsActionType, SettingsKeys } from './action.types';

const initialState = {
  settings: Object.values(SettingsKeys).reduce(
    (curr, key) => ({
      ...curr,
      [key]: {
        enabled: false,
        assignee: null,
        preferences: {},
      },
    }),
    {} as any,
  ),
};

export const settingsState = (state: any) => ({
  settings: state.settings.settings,
});

// eslint-disable-next-line @typescript-eslint/default-param-last
export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SettingsActionType.UPDATE_ASSIGNEE:
      return {
        settings: {
          ...state.settings,
          [action.payload.key]: {
            ...state.settings[action.payload.key],
            assignee: action.payload.value,
          },
        },
      };
    case SettingsActionType.TOGGLE_SETTING:
      return {
        settings: {
          ...state.settings,
          [action.payload.key]: {
            ...state.settings[action.payload.key],
            enabled: !state.settings[action.payload.key]?.enabled,
          },
        },
      };
    case SettingsActionType.UPDATE_PREFERENCES:
      return {
        settings: {
          ...state.settings,
          [action.payload.key]: {
            ...state.settings[action.payload.key],
            preferences: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
};
