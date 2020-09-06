import { IPosts } from './../types/interfaces';

const AddPostsReducerDefaultState: IPosts[] = [];

export default (state = AddPostsReducerDefaultState, action: any): IPosts[] => {
  switch (action.type) {
    case 'ADD_POSTS':
      return action.posts;
    default:
      return state;
  }
};
