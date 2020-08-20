import { rootReducer } from '../reducers';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState>)
);
