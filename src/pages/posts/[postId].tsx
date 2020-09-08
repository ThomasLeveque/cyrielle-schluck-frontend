import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '@components/layout/layout';

interface PostProps {}

const Post: NextPage<PostProps> = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <Layout title={`Post: ${postId}`}>
      <h1>Post: {postId}</h1>
    </Layout>
  );
};

export default Post;
