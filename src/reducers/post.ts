import { IPosts } from './../types/interfaces';

const AddSinglePostReducerDefaultState: IPosts[] = [];

export default (
  state = AddSinglePostReducerDefaultState,
  action: any
): IPosts[] => {
  switch (action.type) {
    case 'ADD_SINGLE_POST':
      return action.post;
    default:
      return state;
  }
};
