import axios, { AxiosResponse } from 'axios';
import { selectorFamily } from 'recoil';

const callMovieApi = async (name: string) => {
  return await axios.get(`/api/movies/${name}`);
};

const moviesQuery = selectorFamily({
  key: 'MoviesQuery',
  get: (name) => async () => {
    try {
      const response: AxiosResponse<{
        Response?: string;
        Error?: string;
        Title: string;
        imdbRating: string;
        Poster: string;
        Released: string;
      }> = await callMovieApi(name as string);

      if (response.data.Error) {
        throw response.data.Error;
      }

      return response.data;
    } catch (err) {
      console.warn('Fatal occurred');
    }
  },
});

export { moviesQuery };
