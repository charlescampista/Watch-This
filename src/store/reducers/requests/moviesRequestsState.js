import actionTypes from "../../actionTypes";

const INITIAL_STATE = {
  isLoading: false,
  movies: [],
  isCleared: true,
  page: 1,
};

export default function moviesRequestsState(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === actionTypes.GET_POPULAR_MOVIES) {
    return {
      ...state,
      isLoading: action.isLoading,
      movies: removeDuplicateMovies([...state.movies, ...action.movies]),
      isCleared: false,
      page: action.page,
    };
  }

  if (action.type === actionTypes.GET_UPCOMING_MOVIES) {
    return {
      ...state,
      isLoading: action.isLoading,
      movies: removeDuplicateMovies([...state.movies, ...action.movies]),
      isCleared: false,
      page: action.page,
    };
  }

  if (action.type === actionTypes.GET_NOW_PLAYING_MOVIES) {
    return {
      ...state,
      isLoading: action.isLoading,
      movies: removeDuplicateMovies([...state.movies, ...action.movies]),
      isCleared: false,
      page: action.page,
    };
  }

  if (action.type === actionTypes.GET_TOP_RATED_MOVIES) {
    return {
      ...state,
      isLoading: action.isLoading,
      movies: removeDuplicateMovies([...state.movies, ...action.movies]),
      isCleared: false,
      page: action.page,
    };
  }

  if (action.type === actionTypes.CLEAR_MOVIES) {
    return INITIAL_STATE;
  }
  return state;
}

function removeDuplicateMovies(movies) {
  let singleIdInstances = Array.from(new Set(movies.map((m) => m.id)));
  let nonDuplicateMovies = singleIdInstances.map((id) =>
    movies.find((m) => m.id === id)
  );
  return nonDuplicateMovies;
}
