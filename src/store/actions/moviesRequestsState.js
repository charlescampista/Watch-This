import actionTypes from "../actionTypes";

export function getPopularMovies(isLoading, movies) {
  return {
    type: actionTypes.GET_POPULAR_MOVIES,
    isLoading,
    movies,
  };
}
