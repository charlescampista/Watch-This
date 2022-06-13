import actionTypes from "../../actionTypes";

const INITIAL_STATE = {
  isLoading: false,
  movies: [],
  page: 1,
};

export default function moviesRequestsState(state = INITIAL_STATE, action) {
  if (action.type === actionTypes.GET_POPULAR_MOVIES) {
    return {
      ...state,
      isLoading: action.isLoading,
      movies: [...state.movies, ...action.movies],
      page: action.page,
    };
  }
  return state;
}
