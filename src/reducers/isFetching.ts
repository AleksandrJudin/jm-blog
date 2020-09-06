const isFetchingAllReducerDefaultState: boolean = false;

export default (
  state = isFetchingAllReducerDefaultState,
  action: any
): boolean => {
  switch (action.type) {
    case 'ALL_POSTS_FETCHING':
      return (state = action.payload);
    default:
      return state;
  }
};
