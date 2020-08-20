import { AppActions } from './../types/actions';
import { Dispatch } from 'redux';
import ServicesApi from '../services/servicesAPI';
import { IPosts } from '../types/interfaces';

export const addPost = (posts: Array<IPosts>): AppActions => ({
  type: 'ADD_POSTS',
  posts,
});

export const getPostRequest = (offset: number) => (dispatch: Dispatch): any => {
  const posts = new ServicesApi();
  posts.getRequestArticles(offset).then((data) => {
    dispatch(addPost(data.articles));
  });
};
