import actionTypes from "../../actionTypes";

const INITIAL_STATE = {
  isLoading: false,
  movies: [],
};

export default function moviesRequestsState(state = INITIAL_STATE, action) {
  if (action.type === actionTypes.GET_POPULAR_MOVIES) {
    return {
      ...state,
      isLoading: action.isLoading,
      movies: action.movies,
    };
  }
  return state;
}
