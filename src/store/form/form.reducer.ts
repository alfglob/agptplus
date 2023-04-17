import { FormActionType } from './action.types';

const initialState = {
  formData: {},
};

export const formState = (state: any) => ({
  formData: state.form.formData,
});

// eslint-disable-next-line @typescript-eslint/default-param-last
export const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FormActionType.UPDATE_FIELD:
      return {
        formData: {
          ...state.formData,
          [action.payload.key]: action.payload.value,
        },
      };
    case FormActionType.CLEAR_FIELD:
      return {
        formData: {
          ...state.formData,
          [action.payload.key]: '',
        },
      };
    case FormActionType.CLEAR_ALL:
      return { formData: {} };
    default:
      return state;
  }
};
