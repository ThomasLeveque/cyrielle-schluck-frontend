import React, { useContext } from 'react';
import { GetStaticProps, GetStaticPaths, GetStaticPathsResult, NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import { ThemeContext } from 'styled-components';
import { rgba } from 'polished';

import Layout from '@components/layout/layout';
import { ProjectData, ProjectsData, Project } from '@interfaces/project.interface';
import { initializeApollo } from '@lib/apolloClient';
import { ALL_PROJECTS_QUERY } from '.';

import { HeadingStyles } from '@styles/texts/heading.styles';
import { ProjectStyles } from '@styles/pages/project.styles';

const PROJECT_QUERY = gql`
  query GetProject($projectSlug: String!) {
    projectBySlug(slug: $projectSlug) {
      id
      name
      shortDesc
      description
      color
      slug
      textsColor
      image {
        url
      }
      category {
        name
        slug
      }
      projectSteps {
        ... on ComponentBlockProjectStep {
          title
          subtitle
          description
          bgColor
          stepItems {
            title
            grid
            itemImages {
              size
              grid
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`;

interface ProjectPageProps {
  projectSlug: string;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ projectSlug }) => {
  const theme = useContext(ThemeContext);

  const { data, loading } = useQuery<ProjectData>(PROJECT_QUERY, {
    variables: { projectSlug },
  });

  const project = data?.projectBySlug as Project;

  if (loading) {
    return <Layout title="Loading...">Loading...</Layout>;
  }

  return (
    <Layout title={project.name}>
      <ProjectStyles bgColor={project.color}>
        <header className="full-width">
          <HeadingStyles
            as="h2"
            fontSize={28}
            lineHeight={34}
            isUppercase
            color={rgba(theme.colors.black, 0.15)}
            fontFamily={theme.fonts.mainFont}
            mb={5}
          >
            {project.category?.name}
          </HeadingStyles>
          <HeadingStyles
            as="h1"
            fontSize={80}
            lineHeight={100}
            mb={0}
            color={theme.colors[project.textsColor]}
          >
            {project.name}
          </HeadingStyles>
        </header>
      </ProjectStyles>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<ProjectData>({
    query: PROJECT_QUERY,
    variables: { projectSlug: params?.projectSlug },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      projectSlug: params?.projectSlug,
      textsColor: data.projectBySlug.textsColor,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<{ projectSlug: string }>
> => {
  const apolloClient = initializeApollo();

  const {
    data: { projects },
  } = await apolloClient.query<ProjectsData>({
    query: ALL_PROJECTS_QUERY,
  });

  const paths = projects.map((project: Project) => ({
    params: { projectSlug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;
