const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = 'ea591a26ca622a3908f28e08eb08abc3';

const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';

const BACKDROP_SIZE: string = 'w1280';

const POSTER_SIZE: string = 'w500';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
