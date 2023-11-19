import Link from 'next/link';

export default function Home() {
  return (
    <div className="card w-3/12 border border-gray-300">
      <div className="card-body">
        <h2 className="card-title">Users</h2>
        <p>List of all users</p>
        <div className="card-actions justify-end">
          <Link
            href="users"
            className="btn-link"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
