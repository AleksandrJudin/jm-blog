import { IPosts } from './interfaces';

export const ADD_POSTS = 'ADD_POSTS';
export const LOADING_ALL_POSTS = 'LOADING_ALL_POSTS';
export const LOADING_SINGLE_POST = 'LOADING_SINGLE_POST';
export const ADD_SINGLE_POST = 'ADD_SINGLE_POST';

export interface AddPostsActions {
  type: typeof ADD_POSTS;
  posts: IPosts[];
}
export interface AddSinglePostActions {
  type: typeof ADD_SINGLE_POST;
  post: IPosts[];
}

export interface changeLoadingAllPostsStateAction {
  type: typeof LOADING_ALL_POSTS;
  payload: boolean;
}

export interface changeLoadingSinglePostStateAction {
  type: typeof LOADING_SINGLE_POST;
  payload: boolean;
}

export type ExpenseActionTypes =
  | AddPostsActions
  | changeLoadingAllPostsStateAction
  | changeLoadingSinglePostStateAction
  | AddSinglePostActions;

export type AppActions = ExpenseActionTypes;
