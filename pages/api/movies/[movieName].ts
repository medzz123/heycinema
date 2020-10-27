import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { movieName },
  } = req;

  const url = `http://www.omdbapi.com/?apikey=1adfe36&t=${movieName}`;

  try {
    const response = await axios.get(url);

    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to call omd' });
  }
};
