import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '43658d6d4343b834cdd29cb42d0281f9';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/';

export const getTrendingMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const getMovieDetails = async id => {
  const res = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieCast = async id => {
  const res = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return res.data;
};

export const getMovieReviews = async id => {
  const res = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const getSearchMovie = async query => {
  const res = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data.results;
};
