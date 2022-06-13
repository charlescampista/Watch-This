import actionTypes from "../actionTypes";

export function getPopularMovies(page, isLoading, movies) {
  return {
    type: actionTypes.GET_POPULAR_MOVIES,
    isLoading,
    page,
    movies,
  };
}
