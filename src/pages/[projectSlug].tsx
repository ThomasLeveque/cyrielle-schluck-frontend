import React, { useContext } from 'react';
import { GetStaticProps, GetStaticPaths, GetStaticPathsResult, NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import ProjectSteps from '@components/project-steps/project-steps';
import Layout from '@components/layout/layout';
import { ProjectData, ProjectsData, Project } from '@interfaces/project.interface';
import { initializeApollo } from '@lib/apolloClient';
import {
  delayStaggerChildrenVariants,
  itemVariants,
  itemXVariants,
} from '@animations/global.animation';
import { ALL_PROJECTS_QUERY } from '.';

import { HeadingStyles } from '@styles/texts/heading.styles';
import { ProjectStyles } from '@styles/pages/project.styles';
import { PStyles } from '@styles/texts/p.styles';

const PROJECT_QUERY = gql`
  query GetProject($projectSlug: String!) {
    projectBySlug(slug: $projectSlug) {
      id
      name
      isShortName
      formatedName
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
          id
          title
          subtitle
          description
          bgColor
          stepItems {
            id
            title
            grid
            itemImages {
              id
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
        <motion.header
          animate="animate"
          initial="initial"
          variants={delayStaggerChildrenVariants}
          className="full-width page-header"
        >
          <div className="header-texts">
            <motion.div variants={itemXVariants} custom={-20} className="header-texts-headings">
              <HeadingStyles
                as="h2"
                fontSize={28}
                lineHeight={1.2}
                isUppercase
                color={rgba(theme.colors.black, 0.15)}
                fontFamily={theme.fonts.mainFont}
                mb={5}
              >
                {project.category?.name}
              </HeadingStyles>
              {project.formatedName ? (
                <HeadingStyles
                  source={project.formatedName}
                  as={ReactMarkdown}
                  escapeHtml={false}
                  fontSize={project.isShortName ? 80 : 60}
                  lineHeight={project.isShortName ? 1.25 : 1.15}
                  mb={0}
                  color={theme.colors[project.textsColor]}
                />
              ) : (
                <HeadingStyles
                  as="h1"
                  fontSize={project.isShortName ? 80 : 60}
                  lineHeight={project.isShortName ? 1.25 : 1.15}
                  mb={0}
                  color={theme.colors[project.textsColor]}
                >
                  {project.name}
                </HeadingStyles>
              )}
            </motion.div>
            <motion.div variants={itemXVariants}>
              <PStyles
                source={project.description}
                as={ReactMarkdown}
                escapeHtml={false}
                fontSize={16}
                lineHeight={1.75}
                color={theme.colors[project.textsColor]}
              />
            </motion.div>
          </div>
          <motion.img
            variants={itemVariants}
            src={`${process.env.NEXT_PUBLIC_API_URL}${project.image.url}`}
          />
        </motion.header>
        <ProjectSteps projectSteps={project.projectSteps} />
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
    revalidate: 60,
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