import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '@components/layout/layout';

interface ProjectProps {}

const Project: NextPage<ProjectProps> = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <Layout title={`Project: ${projectId}`}>
      <h1>Project: {projectId}</h1>
    </Layout>
  );
};

export default Project;
