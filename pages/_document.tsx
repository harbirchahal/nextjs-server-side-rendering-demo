import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang="en"
      data-theme="winter"
    >
      <title>NextJS SSG and SSR Demo</title>
      <meta
        name="description"
        content="NextJS server side rendering demo"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
