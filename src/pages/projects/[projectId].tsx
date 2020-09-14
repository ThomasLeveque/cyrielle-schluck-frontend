import React, { useContext } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import Layout from '@components/layout/layout';

import { H1Styles } from '@styles/texts/h1.styles';

interface ProjectProps {}

const Project: NextPage<ProjectProps> = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const theme = useContext(ThemeContext);

  return (
    <Layout title={`Project: ${projectId}`}>
      <H1Styles fontSize={60} lineHeight={70} mb={0} color={theme.colors.myWhite}>
        Project: {projectId}
      </H1Styles>
    </Layout>
  );
};

export default Project;
