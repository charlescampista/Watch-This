import actionTypes from "../actionTypes";

export function getPopularMovies(page, isLoading, movies) {
  return {
    type: actionTypes.GET_POPULAR_MOVIES,
    isLoading,
    page,
    movies,
  };
}

export function getUpcomingMovies(page, isLoading, movies) {
  return {
    type: actionTypes.GET_UPCOMING_MOVIES,
    isLoading,
    page,
    movies,
  };
}

export function getNowPlayingMovies(page, isLoading, movies) {
  return {
    type: actionTypes.GET_NOW_PLAYING_MOVIES,
    isLoading,
    page,
    movies,
  };
}

export function getTopRatedMovies(page, isLoading, movies) {
  return {
    type: actionTypes.GET_TOP_RATED_MOVIES,
    isLoading,
    page,
    movies,
  };
}

export function clearMovies() {
  return {
    type: actionTypes.CLEAR_MOVIES,
  };
}
