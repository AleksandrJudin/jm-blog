import { IPosts } from './interfaces';

export const ADD_POSTS = 'ADD_POSTS';

export interface AddPostsActions {
  type: typeof ADD_POSTS;
  posts: IPosts[];
}

export type addPostActionTypes = AddPostsActions;

export type AppActions = addPostActionTypes;
