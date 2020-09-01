const FavoritePostsCountReducerDefaultState: number = 0;

export default (
  state = FavoritePostsCountReducerDefaultState,
  action: any
): number => {
  switch (action.type) {
    case 'FAVORITE_POST':
      return state + 1;
    case 'UNFAVORITE_POST':
      return state - 1;
    default:
      return state;
  }
};
