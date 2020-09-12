import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

import Layout from '@components/layout/layout';
import { initializeApollo } from '@lib/apolloClient';
import { ProjectsData, Project } from '@interfaces/project.interface';

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
  const { loading, data } = useQuery<ProjectsData>(ALL_PROJECTS_QUERY);

  if (loading) {
    return <div>loading...</div>;
  }

  const { projects } = data as ProjectsData;

  return (
    <Layout title="Home">
      <ul>
        {projects.map((project: Project) => (
          <li key={project.id}>
            <Link href={`projects/${project.id}`}>
              <a>{project.name}</a>
            </Link>
            <p>Color: {project.color}</p>
            <p>Desc: {project.shortDesc}</p>
          </li>
        ))}
      </ul>
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
