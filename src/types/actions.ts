import { IPosts, IAuth } from './interfaces';

export const ADD_POSTS = 'ADD_POSTS';
export const LOADING_ALL_POSTS = 'LOADING_ALL_POSTS';
export const LOADING_SINGLE_POST = 'LOADING_SINGLE_POST';
export const ADD_SINGLE_POST = 'ADD_SINGLE_POST';
export const SET_USER_DATA = 'SET_USER_DATA';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

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

export interface changeAuthError {
  type: typeof AUTHENTICATION_ERROR;
  payload: boolean;
}

export interface SetUserDataAction {
  type: typeof SET_USER_DATA;
  user: IAuth;
}

export interface LogOut {
  type: typeof LOG_OUT;
}

export type ExpenseActionTypes =
  | AddPostsActions
  | changeLoadingAllPostsStateAction
  | changeLoadingSinglePostStateAction
  | AddSinglePostActions
  | SetUserDataAction
  | LogOut
  | changeAuthError;

export type AppActions = ExpenseActionTypes;
