import React from 'react';

import Home from '../src/components/home/Home';
import Layout from '../src/layout/Layout';
import SEO from '../src/utils/SEO';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home Page" description="Welcome to home page" />
      <Home />
    </Layout>
  );
};

export default IndexPage;
