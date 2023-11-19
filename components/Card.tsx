import { ReactElement } from 'react';

type Props = {
  title: string;
  children: ReactElement;
};

export default function Card(props: Props) {
  const { title, children } = props;

  return (
    <div className="card border border-gray-200">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
