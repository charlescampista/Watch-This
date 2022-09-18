import api from "./api";

export const getUpcomingMovies = async (page, language) => {
  const result = await api.get(
    `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );
  return result;
};

export const getPopularMovies = async (page, language) => {
  const result = await api.get(
    `/movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );
  return result;
};

export const getTopRatedMovies = async (page, language) => {
  const result = await api.get(
    `/movie/top_rated?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );
  return result;
};

export const getNowPlayingMovies = async (page, language) => {
  const result = await api.get(
    `/movie/now_playing?page=${page}&api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );
  return result;
};
