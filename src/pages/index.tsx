import React, { useContext } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { ThemeContext } from 'styled-components';
import useInView from 'react-cool-inview';
import { motion, useAnimation } from 'framer-motion';

import Layout from '@components/layout/layout';
import { initializeApollo } from '@lib/apolloClient';
import { Project, ProjectsData } from '@interfaces/project.interface';
import CustomButton from '@components/custom-button/custom-button';
import ProjectList from '@components/project-list/project-list';
import { itemVariants, stagger } from '@animations/global.animation';
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
        alternativeText
      }
      category {
        name
        slug
      }
    }
  }
`;

const HomePage: NextPage = () => {
  const { data, loading } = useQuery<ProjectsData>(ALL_PROJECTS_QUERY);
  const projects = data?.projects as Project[];

  const router = useRouter();
  const theme = useContext(ThemeContext);

  const gotoAboutMe = (): void => {
    router.push('/plus-sur-moi', undefined, { scroll: false });
  };

  const firstTitleMobileAnimation = useAnimation();
  const { observe } = useInView({
    threshold: 0.6,
    unobserveOnEnter: true,
    onEnter: () => firstTitleMobileAnimation.start('animate'),
  });

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  // SEO is inside next-seo.config file for the home page
  return (
    <Layout>
      <IndexStyles>
        <Desktop>
          <HomeInfosDesktop gotoAboutMe={gotoAboutMe} />
        </Desktop>
        <NotDesktop>
          <motion.header className="home-infos-not-desktop-header" initial="initial" animate="animate" variants={stagger} ref={observe}>
            <HeadingStyles mb={theme.vars.lSpace} fontSize={70}>
              <motion.div variants={itemVariants}>
                <span className="color-gray">Cyrielle</span>,
              </motion.div>
              <motion.div variants={itemVariants}>
                Product designer
                <span className="color-gray">.</span>
              </motion.div>
            </HeadingStyles>
            <PStyles as={motion.p} variants={itemVariants} letterSpacing={1} mb={theme.vars.lSpace}>
              Designer UI & UX avec plus de 3 ans d’expérience, je mets l’utilisateur au centre de mon travail ergonomique et graphique afin
              de lui assurer la meilleure expérience possible.
            </PStyles>
            <motion.div variants={itemVariants}>
              <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
            </motion.div>
          </motion.header>
        </NotDesktop>
        <ProjectList projects={projects} />
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
    revalidate: 30,
  };
};

export default HomePage;
