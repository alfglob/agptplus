import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { chatActions, chatState } from './chat/action.creators';
import { chatMiddleware } from './chat/chat.middleware';
import { chatReducer } from './chat/chat.reducer';
import { confluenceActions } from './confluence/action.creators';
import { confluenceReducer, confluenceState } from './confluence/confluence.reducer';
import { extrasActions } from './extras/action.creators';
import { extrasState, extrasReducer } from './extras/extras.reducer';
import { formActions } from './form/action.creators';
import { formReducer, formState } from './form/form.reducer';
import { settingsActions } from './settings/action.creators';
import { settingsReducer, settingsState } from './settings/settings.reducer';

const reducers = combineReducers({
  chat: chatReducer,
  form: formReducer,
  settings: settingsReducer,
  extras: extrasReducer,
  confluence: confluenceReducer,
});

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(chatMiddleware)));
export type RootState = ReturnType<typeof reducers>;

export const mapStateToProps = (state: any) => ({
  ...chatState(state),
  ...formState(state),
  ...settingsState(state),
  ...extrasState(state),
  ...confluenceState(state),
});
export const mapDispatchToProps = (dispatch: any) => ({
  ...chatActions(dispatch),
  ...formActions(dispatch),
  ...settingsActions(dispatch),
  ...extrasActions(dispatch),
  ...confluenceActions(dispatch),
});
