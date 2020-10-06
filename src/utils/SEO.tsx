import * as React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
};

const SEO: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Andrew Joel <GitHub: Andrew2432>" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SEO;
