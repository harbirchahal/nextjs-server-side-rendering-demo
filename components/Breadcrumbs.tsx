import Link from 'next/link';

type Props = {
  links: Array<{
    href: string;
    text: string;
  }>;
};

export default function Breadcrumbs(props: Props) {
  const { links } = props;

  return (
    <div className="text-sm breadcrumbs p-3 pt-0">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:underline hover:text-blue-600"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
