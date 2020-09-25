import React, { useContext } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import Layout from '@components/layout/layout';

import { HeadingStyles } from '@styles/texts/heading.styles';

interface ProjectProps {}

const Project: NextPage<ProjectProps> = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const theme = useContext(ThemeContext);

  return (
    <Layout title={`Project: ${projectId}`}>
      <HeadingStyles as="h1" fontSize={60} lineHeight={70} mb={0} color={theme.colors.myWhite}>
        Project: {projectId}
      </HeadingStyles>
    </Layout>
  );
};

export default Project;
