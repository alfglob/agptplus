import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { chatActions, chatState } from './chat/action.creators';
import { chatMiddleware } from './chat/chat.middleware';
import { chatReducer } from './chat/chat.reducer';
import { formActions } from './form/action.creators';
import { formReducer, formState } from './form/form.reducer';
import { settingsActions } from './settings/action.creators';
import { settingsReducer, settingsState } from './settings/settings.reducer';

const reducers = combineReducers({
  chat: chatReducer,
  form: formReducer,
  settings: settingsReducer,
});

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(chatMiddleware)));
export type RootState = ReturnType<typeof reducers>;

export const mapStateToProps = (state: any) => ({
  ...chatState(state),
  ...formState(state),
  ...settingsState(state),
});
export const mapDispatchToProps = (dispatch: any) => ({
  ...chatActions(dispatch),
  ...formActions(dispatch),
  ...settingsActions(dispatch),
});
