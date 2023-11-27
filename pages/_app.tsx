import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md rounded-box px-4 flex justify-between">
      <div className="text-xl font-semibold">
        NextJS Server-Side Rendering Demo
      </div>
      <div>
        <a
          href="https://github.com/harbirchahal/nextjs-server-side-rendering-demo"
          target="_blank"
          className="btn btn-ghost btn-xs"
        >
          View on GitHub
        </a>
        <a
          href="https://stackblitz.com/edit/nextjs-server-side-rendering-demo"
          target="_blank"
          className="btn btn-ghost btn-xs"
        >
          Edit on StackBlitz
        </a>
      </div>
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="p-3">
        <Component {...pageProps} />
      </main>
    </>
  );
}
