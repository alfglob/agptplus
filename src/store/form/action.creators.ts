import { FormActionType } from './action.types';

export const init = () => ({
  formData: {},
});

export const updateField = (payload: any) => ({
  type: FormActionType.UPDATE_FIELD,
  payload,
});

export const clearField = (payload: any) => ({
  type: FormActionType.CLEAR_FIELD,
  payload,
});

export const clearAllFields = (payload: any) => ({
  type: FormActionType.CLEAR_ALL,
  payload,
});

export const formActions = (dispatch: any) => ({
  updateField: (payload: any) => dispatch(updateField(payload)),
  clearField: (payload: any) => dispatch(clearField(payload)),
  clearAllFields: (payload: any) => dispatch(clearAllFields(payload)),
});
