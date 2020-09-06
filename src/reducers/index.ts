import { combineReducers } from 'redux';

import posts from './posts';
import isFetching from './isFetching';
import post from './post';
import isAuthentication from './isAuthentication';
import isAuthError from './isAuthError';
import articlesPostTags from './articlesPostTags';
import favoritePostsCount from './favoritePostsCount';

export const rootReducer: any = combineReducers({
  posts,
  post,
  isFetching,
  isAuthentication,
  isAuthError,
  articlesPostTags,
  favoritePostsCount,
});
