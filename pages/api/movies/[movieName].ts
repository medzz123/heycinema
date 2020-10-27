import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    query: { movieName },
  } = req;

  res.status(200).json({ name: `${movieName}` });
};
