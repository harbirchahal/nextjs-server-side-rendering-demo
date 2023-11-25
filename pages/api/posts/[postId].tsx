import type { NextApiRequest, NextApiResponse } from 'next';

import { Post } from '@/data/types';
import { getPostByQuery } from '@/data/utils';

type Data = Post | undefined;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('API /post', req.query);
  const postId = req.query.postId ?? '';
  const post = await getPostByQuery({ id: +postId });
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(400).json(undefined);
  }
}
