import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md rounded-box px-4">
      <div className="text-xl font-semibold">
        NextJS Server-Side Rendering Demo
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
