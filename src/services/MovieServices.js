import api from "./api";

export const getUpcomingMovies = async () => {
  const result = await api.get(
    `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return result;
};

export const getPopularMovies = async () => {
  const result = await api.get(
    `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return result;
};

export const getTopRatedMovies = async () => {
  const result = await api.get(
    `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return result;
};

export const getNowPlayingMovies = async () => {
  const result = await api.get(
    `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return result;
};
