import { Comment, Post, User } from '@/data/types';
import {
  getPostByQuery,
  getCommentsByQuery,
  getUserByQuery,
} from '@/data/utils';
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';

type PageProps = {
  user: User;
  post: Post;
  comments: Comment[];
};

export default function Post(props: PageProps) {
  const { user, post, comments } = props;

  return (
    <>
      <Breadcrumbs
        links={[
          { href: '/', text: 'Home' },
          { href: '/users', text: 'Users' },
          { href: `/users/${user?.id}`, text: user?.name },
        ]}
      />
      <div className="flex flex-col gap-2">
        <Card title={post.title}>
          <p>{post.body}</p>
        </Card>
        <Card title="Comments">
          <ul>
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="my-3"
              >
                <span className="mr-2">{comment.body}</span>
                <span className="text-gray-400 lowercase">{comment.email}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const userId = Number(params.userId);
  const postId = Number(params.postId);
  if (!isNaN(postId) && !isNaN(userId)) {
    const user = await getUserByQuery({ id: userId });
    const post = await getPostByQuery({ id: postId, userId });
    if (user && post) {
      const comments = await getCommentsByQuery({ postId });
      return { props: { user, post, comments } };
    }
  }
  return { notFound: true };
}
