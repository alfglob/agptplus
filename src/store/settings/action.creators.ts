import { SettingsActionType, SettingsKeys } from './action.types';

export const init = () => ({
  settings: Object.values(SettingsKeys).reduce(
    (curr, key) => ({
      ...curr,
      [key]: {
        enabled: false,
        asignee: null,
        preferences: {},
      },
    }),
    {} as any,
  ),
});

export const updateAsignee = (payload: any) => ({
  type: SettingsActionType.UPDATE_ASIGNEE,
  payload,
});

export const toggleSetting = (payload: any) => ({
  type: SettingsActionType.TOGGLE_SETTING,
  payload,
});

export const updatePreferences = (payload: any) => ({
  type: SettingsActionType.UPDATE_PREFERENCES,
  payload,
});

export const settingsActions = (dispatch: any) => ({
  updateAsignee: (payload: any) => dispatch(updateAsignee(payload)),
  toggleSetting: (payload: any) => dispatch(toggleSetting(payload)),
  updatePreferences: (payload: any) => dispatch(updatePreferences(payload)),
});
