import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

import Layout from '@components/layout/layout';
import { initializeApollo } from '@lib/apolloClient';
import { ProjectsData, Project } from '@interfaces/project.interface';

import { IndexStyles } from '@styles/pages/index.styles';
import { H1Styles } from '@styles/texts/h1.styles';
import { PStyles } from '@styles/texts/p.styles';

export const ALL_PROJECTS_QUERY = gql`
  query {
    projects {
      id
      name
      shortDesc
      desc
      color
      image {
        url
      }
      category {
        name
      }
    }
  }
`;

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  const { data } = useQuery<ProjectsData>(ALL_PROJECTS_QUERY);

  const { projects } = data as ProjectsData;

  return (
    <Layout title="Home">
      <IndexStyles>
        <H1Styles>
          <span>Cyrielle</span>,<br /> Designer UI<span>/</span>UX<span>.</span>
        </H1Styles>
        <PStyles letterSpacing={1}>
          Designer UI & UX avec plus de 3 ans d’expérience, je mets l’utilisateur au centre de mon
          travail ergonomique et graphique afin de lui assurer la meilleure expérience possible.
        </PStyles>
        <ul>
          {projects.map((project: Project) => (
            <li key={project.id}>
              <Link href="projects/[projectId]" as={`projects/${project.id}`}>
                <a>{project.name}</a>
              </Link>
              <p>Color: {project.color}</p>
              <p>Desc: {project.shortDesc}</p>
            </li>
          ))}
        </ul>
      </IndexStyles>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_PROJECTS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default Home;
