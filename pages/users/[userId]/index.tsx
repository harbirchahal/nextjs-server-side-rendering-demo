import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faEnvelope,
  faPaperclip,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Post, User } from '@/data/types';
import { getAllUsers, getUserByQuery } from '@/data/utils';
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';

type PageProps = {
  user: User;
};

export default function User(props: PageProps) {
  const { user } = props;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`/api/posts?userId=${user?.id}`)
      .then((res) => res.json())
      .then(setPosts);
  }, [user]);

  return (
    <>
      <Breadcrumbs
        links={[
          { href: '/', text: 'Home' },
          { href: '/users', text: 'Users' },
        ]}
      />
      <div className="flex flex-col gap-2">
        <Card title={user.name}>
          <div className="flex gap-20">
            <div>
              <div>
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-2"
                />
                <span>{user.username}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2"
                />
                <span>{user.email}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2"
                />
                <span>{user.phone}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPaperclip}
                  className="mr-2"
                />
                <span>{user.website}</span>
              </div>
            </div>
            <div>
              <div>
                <div className="text-gray-400">Address</div>
                <div>
                  {user.address.street}, {user.address.city}
                </div>
              </div>
              <div>
                <div className="text-gray-400">Company</div>
                <div>{user.company.name}</div>
              </div>
            </div>
          </div>
        </Card>
        <Card title="Posts">
          <ul>
            {posts.map((post) => (
              <li className="my-3">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  size="xs"
                  className="mr-2"
                />
                <Link
                  href={`${user.id}/posts/${post.id}`}
                  className="hover:underline hover:text-blue-600"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const users = await getAllUsers();
  const paths = users.map((user) => ({ params: { userId: String(user.id) } }));
  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const userId = Number(params.userId);
  if (!isNaN(userId)) {
    const user = await getUserByQuery({ id: userId });
    if (user) {
      return { props: { user } };
    }
  }
  return { notFound: true };
}
