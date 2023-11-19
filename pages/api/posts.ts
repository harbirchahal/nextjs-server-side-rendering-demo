// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Post } from '@/data/types';
import { getPostsByQuery } from '@/data/utils';

type Data = Post[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const userId = req.query.userId ?? '';
  const posts = await getPostsByQuery({ userId: +userId });
  res.status(200).json(posts);
}
