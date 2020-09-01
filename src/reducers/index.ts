import { combineReducers } from 'redux';

import getPosts from './getPosts';
import isFetchingAllPosts from './isFetchingAllPosts';
import isFetchingSinglePost from './isFetchingSinglePost';
import getSinglePost from './getSinglePost';
import isAuthentication from './isAuthentication';
import isAuthError from './isAuthError';
import articlesPostTags from './articlesPostTags';
import favoritePostsCount from './favoritePostsCount';

export const rootReducer: any = combineReducers({
  getPosts,
  getSinglePost,
  isFetchingAllPosts,
  isFetchingSinglePost,
  isAuthentication,
  isAuthError,
  articlesPostTags,
  favoritePostsCount,
});
