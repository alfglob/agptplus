import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { appActions } from './app/action.creators';

import { appReducer, appState } from './app/app.reducer';
import { chatActions, chatState } from './chat/action.creators';
import { chatMiddleware } from './chat/chat.middleware';
import { chatReducer } from './chat/chat.reducer';
import { formActions } from './form/action.creators';
import { formReducer, formState } from './form/form.reducer';

const reducers = combineReducers({
  chat: chatReducer,
  app: appReducer,
  form: formReducer,
});

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(chatMiddleware)));
export type RootState = ReturnType<typeof reducers>;

export const mapStateToProps = (state: any) => ({
  ...chatState(state),
  ...appState(state),
  ...formState(state),
});
export const mapDispatchToProps = (dispatch: any) => ({
  ...appActions(dispatch),
  ...chatActions(dispatch),
  ...formActions(dispatch),
});
