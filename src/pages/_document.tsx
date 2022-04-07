import React from 'react';
import {Html, Head, Main, NextScript} from 'next/document';

import 'regenerator-runtime/runtime';

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#f9a8d4" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
