import { combineReducers } from 'redux';
import getPosts from './getPosts';

export const rootReducer: any = combineReducers({
  getPosts,
});
