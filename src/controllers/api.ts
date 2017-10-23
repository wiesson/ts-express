import { Response, Request } from 'express';

export const getApi = async (req: Request, res: Response) => {
  res.send({
    title: 'hi api',
  });
};
