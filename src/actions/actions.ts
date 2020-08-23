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

export const changeLoadingAllPosts = (payload: boolean): AppActions => ({
  type: 'LOADING_ALL_POSTS',
  payload,
});

export const changeLoadingSinglePost = (payload: boolean): AppActions => ({
  type: 'LOADING_SINGLE_POST',
  payload,
});

export const getPostRequest = (offset: number) => (
  dispatch: Dispatch
): void => {
  const posts = new ServicesApi();
  posts.getRequestArticles(offset).then((data) => {
    dispatch(addPost(data.articles));
    dispatch(changeLoadingAllPosts(false));
  });
};

export const getSinglePostRequest = (slug: string) => (
  dispatch: Dispatch
): void => {
  dispatch(changeLoadingSinglePost(true));
  const post = new ServicesApi();
  post.getRequestSingleArticle(slug).then((data) => {
    dispatch(addSinglePost(data.article));
    dispatch(changeLoadingSinglePost(false));
  });
};
