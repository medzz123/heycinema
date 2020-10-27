import { selectorFamily } from 'recoil';
import axios from 'axios';

const callMovieApi = async (name: string) => {
  return await axios.get<{ error: any }>(`/api/movies/${name}`);
};

const moviesQuery = selectorFamily<any, { name: string }>({
  key: 'MoviesQuery',
  get: ({ name }) => async () => {
    const response = await callMovieApi(name);

    //   if (response.error) {
    //     throw response.error;
    //   }

    console.log('Response', response);
    return response.data;
  },
});

export { moviesQuery };
