import { IAuth } from './../types/interfaces';
import { AppActions } from './../types/actions';
import { Dispatch } from 'redux';
import ServicesApi from '../services/servicesAPI';

import { IPosts } from '../types/interfaces';

export const addPost = (posts: Array<IPosts>): AppActions => ({
  type: 'ADD_POSTS',
  posts,
});

export const addSinglePost = (post: Array<IPosts>): AppActions => ({
  type: 'ADD_SINGLE_POST',
  post,
});

export const changeLoading = (payload: boolean): AppActions => ({
  type: 'FETCHING',
  payload,
});

export const changeAuthError = (payload: boolean): AppActions => ({
  type: 'AUTHENTICATION_ERROR',
  payload,
});

export const setUserData = (user: IAuth): AppActions => ({
  type: 'SET_USER_DATA',
  user,
});

export const logOut = (): AppActions => ({
  type: 'LOG_OUT',
});

export const addArticleTag = (payload: string[]): AppActions => ({
  type: 'ADD_POST_TAG',
  payload,
});

export const addFavotitesPost = (): AppActions => ({
  type: 'FAVORITE_POST',
});

export const addUnfavotitesPost = (): AppActions => ({
  type: 'UNFAVORITE_POST',
});

export const getPostRequest = (offset: number, token: string | null) => (
  dispatch: Dispatch
): void => {
  const request = new ServicesApi();
  dispatch(changeLoading(true));
  request.getRequestArticles(offset, token).then((data) => {
    dispatch(addPost(data.articles));
    dispatch(changeLoading(false));
  });
};

export const getSinglePostRequest = (slug: string, token: string | null) => (
  dispatch: Dispatch
): void => {
  const request = new ServicesApi();
  dispatch(changeLoading(true));
  request.getRequestSingleArticle(slug, token).then((data) => {
    dispatch(addSinglePost(data.article));
    dispatch(changeLoading(false));
  });
};

export const login = (data: object) => (dispatch: Dispatch): void => {
  const request = new ServicesApi();
  request
    .login(data)
    .then((data) => {
      localStorage.setItem(
        'login',
        JSON.stringify({
          user: data.user,
        })
      );
      dispatch(setUserData(data.user));
      dispatch(changeAuthError(false));
    })
    .catch(() => dispatch(changeAuthError(true)));
};
