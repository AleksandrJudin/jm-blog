import { combineReducers } from 'redux';

import getPosts from './getPosts';
import isFetchingAllPosts from './isFetchingAllPosts';
import isFetchingSinglePost from './isFetchingSinglePost';
import getSinglePost from './getSinglePost';

export const rootReducer: any = combineReducers({
  getPosts,
  getSinglePost,
  isFetchingAllPosts,
  isFetchingSinglePost,
});
