import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@components/layout/layout';

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout title="Home">
      <h1>Home</h1>
      <Link href="/posts/1">
        <a>Post 1</a>
      </Link>
      <Link href="/posts/2">
        <a>Post 2</a>
      </Link>
      <Link href="/posts/3">
        <a>Post 3</a>
      </Link>
    </Layout>
  );
};

export default Home;
