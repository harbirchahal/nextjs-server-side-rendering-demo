import Link from 'next/link';
import sortBy from 'lodash.sortby';

import { User } from '@/data/types';
import { getAllUsers } from '@/data/utils';
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';

type PageProps = {
  users: User[];
};

export default function Users(props: PageProps) {
  const { users = [] } = props;

  return (
    <>
      <Breadcrumbs links={[{ href: '/', text: 'Home' }]} />
      <Card title="Users">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover"
              >
                <td>
                  <Link
                    href={`users/${user.id}`}
                    className="btn-link"
                  >
                    {user.name}
                  </Link>
                </td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}

export async function getStaticProps() {
  const users = await getAllUsers();
  return { props: { users: sortBy(users, 'name') } };
}
