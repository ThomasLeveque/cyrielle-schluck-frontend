import React, { useContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { ThemeContext } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import Layout from '@components/layout/layout';
import { initializeApollo } from '@lib/apolloClient';
import { Project, ProjectsData } from '@interfaces/project.interface';
import CustomButton from '@components/custom-button/custom-button';
import ProjectList from '@components/project-list/project-list';
import { itemVariants, stagger, transition } from '@animations/global.animation';
import Desktop from '@components/responsive/desktop';
import HomeInfosDesktop from '@components/home-infos-desktop/home-infos-desktop';
import NotDesktop from '@components/responsive/not-desktop';

import { IndexStyles } from '@styles/pages/index.styles';
import { PStyles } from '@styles/texts/p.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';

export const ALL_PROJECTS_QUERY = gql`
  query {
    projects {
      id
      name
      shortDesc
      mobileName
      description
      color
      slug
      textsColor
      image {
        width
        height
        url
      }
      category {
        name
        slug
      }
    }
  }
`;

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  const { data, loading } = useQuery<ProjectsData>(ALL_PROJECTS_QUERY);
  const projects = data?.projects as Project[];

  const router = useRouter();
  const theme = useContext(ThemeContext);

  const { ref: projectListRef, entry } = useInView({
    rootMargin: `-350px`,
    trackVisibility: true,
    delay: 100,
  });

  const gotoAboutMe = (): void => {
    router.push('/about-me');
  };

  if (loading) {
    return <Layout title="Loading...">Loading...</Layout>;
  }

  return (
    <Layout title="Home">
      <IndexStyles>
        <Desktop>
          <HomeInfosDesktop gotoAboutMe={gotoAboutMe} entry={entry} />
        </Desktop>
        <NotDesktop>
          <header className="home-infos-not-desktop-header">
            <HeadingStyles mb={theme.vars.lSpace} fontSize={70}>
              <motion.div variants={itemVariants}>
                <span className="color-gray">Cyrielle</span>,
              </motion.div>
              <motion.div variants={itemVariants}>
                Designer UI<span className="color-gray">/</span>UX
                <span className="color-gray">.</span>
              </motion.div>
            </HeadingStyles>
            <PStyles as={motion.p} variants={itemVariants} letterSpacing={1} mb={theme.vars.lSpace}>
              Designer UI & UX avec plus de 3 ans d’expérience, je mets l’utilisateur au centre de
              mon travail ergonomique et graphique afin de lui assurer la meilleure expérience
              possible.
            </PStyles>
            <motion.div variants={itemVariants}>
              <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
            </motion.div>
          </header>
        </NotDesktop>
        <ProjectList
          projects={projects.filter(
            ({ category }: Project) =>
              category?.slug === 'ui-design' || category?.slug === 'ux-ui-design'
          )}
        />
        <NotDesktop>
          <header className="home-infos-not-desktop-header">
            <HeadingStyles
              as={motion.h2}
              variants={itemVariants}
              fontSize={70}
              mb={theme.vars.lSpace}
            >
              Projets identité visuelle et packaging
            </HeadingStyles>
            <PStyles as={motion.p} variants={itemVariants} letterSpacing={1} mb={theme.vars.lSpace}>
              Un master en design graphique a ajouté d’autres cordes à mon arc.
            </PStyles>
            <motion.div variants={itemVariants}>
              <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
            </motion.div>
          </header>
        </NotDesktop>
        <ProjectList
          ref={projectListRef}
          projects={projects.filter(({ category }: Project) => category?.slug === 'packaging')}
        />
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
    revalidate: 60,
  };
};

export default HomePage;
