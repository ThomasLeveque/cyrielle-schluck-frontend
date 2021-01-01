import React, { useContext, useEffect, useMemo } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { ThemeContext } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import Layout from '@components/layout/layout';
import { initializeApollo } from '@lib/apolloClient';
import { Project, ProjectsData } from '@interfaces/project.interface';
import CustomButton from '@components/custom-button/custom-button';
import ProjectList from '@components/project-list/project-list';
import { itemVariantsDelay, staggerChildrenDefault } from '@animations/global.animation';
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

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  const { data, loading } = useQuery<ProjectsData>(ALL_PROJECTS_QUERY);
  const projects = data?.projects as Project[];

  const router = useRouter();
  const theme = useContext(ThemeContext);

  const { ref: projectListRef, entry } = useInView({
    rootMargin: `-350px 0px`,
    trackVisibility: true,
    delay: 100,
  });

  const gotoAboutMe = (): void => {
    router.push('/plus-sur-moi');
  };

  const firstTitleMobileAnimation = useAnimation();
  const { ref: firstTitleMobileRef, inView: firstTitleMobileInView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (firstTitleMobileInView) {
      firstTitleMobileAnimation.start('animate');
    }
  }, [firstTitleMobileAnimation, firstTitleMobileInView]);

  const secondTitleMobileAnimation = useAnimation();
  const { ref: secondTitleMobileRef, inView: secondTitleMobileInView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (secondTitleMobileInView) {
      secondTitleMobileAnimation.start('animate');
    }
  }, [secondTitleMobileAnimation, secondTitleMobileInView]);

  const UIUXDesignProjects = useMemo(
    () =>
      projects.filter(
        ({ category }: Project) =>
          category?.slug === 'ui-design' || category?.slug === 'ux-ui-design'
      ),
    [projects]
  );

  const packagingProjects = useMemo(
    () => projects.filter(({ category }: Project) => category?.slug === 'packaging'),
    [projects]
  );

  const SEO: NextSeoProps = {
    title: 'Mes projets',
    description:
      'Designer UI & UX avec plus de 3 ans d’expérience, je mets l’utilisateur au centre de mon travail ergonomique et graphique afin de lui assurer la meilleure expérience possible.',
  };

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <NextSeo {...SEO} />
      <IndexStyles>
        <Desktop>
          <HomeInfosDesktop gotoAboutMe={gotoAboutMe} entry={entry} />
        </Desktop>
        <NotDesktop>
          <motion.header
            className="home-infos-not-desktop-header"
            initial="initial"
            animate="animate"
            ref={firstTitleMobileRef}
          >
            <HeadingStyles mb={theme.vars.lSpace} fontSize={70}>
              <motion.div variants={itemVariantsDelay} animate={firstTitleMobileAnimation}>
                <span className="color-gray">Cyrielle</span>,
              </motion.div>
              <motion.div
                variants={itemVariantsDelay}
                animate={firstTitleMobileAnimation}
                custom={staggerChildrenDefault}
              >
                Designer UI<span className="color-gray">/</span>UX
                <span className="color-gray">.</span>
              </motion.div>
            </HeadingStyles>
            <PStyles
              as={motion.p}
              variants={itemVariantsDelay}
              animate={firstTitleMobileAnimation}
              custom={staggerChildrenDefault * 2}
              letterSpacing={1}
              mb={theme.vars.lSpace}
            >
              Designer UI & UX avec plus de 3 ans d’expérience, je mets l’utilisateur au centre de
              mon travail ergonomique et graphique afin de lui assurer la meilleure expérience
              possible.
            </PStyles>
            <motion.div
              variants={itemVariantsDelay}
              animate={firstTitleMobileAnimation}
              custom={staggerChildrenDefault * 3}
            >
              <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
            </motion.div>
          </motion.header>
        </NotDesktop>
        <ProjectList projects={UIUXDesignProjects} />
        <NotDesktop>
          <motion.header
            className="home-infos-not-desktop-header"
            initial="initial"
            animate="animate"
            ref={secondTitleMobileRef}
          >
            <HeadingStyles
              as={motion.h2}
              variants={itemVariantsDelay}
              animate={secondTitleMobileAnimation}
              fontSize={70}
              mb={theme.vars.lSpace}
            >
              Projets identité visuelle et packaging
            </HeadingStyles>
            <PStyles
              as={motion.p}
              variants={itemVariantsDelay}
              animate={secondTitleMobileAnimation}
              custom={staggerChildrenDefault}
              letterSpacing={1}
              mb={theme.vars.lSpace}
            >
              Un master en design graphique a ajouté d’autres cordes à mon arc.
            </PStyles>
            <motion.div
              variants={itemVariantsDelay}
              animate={secondTitleMobileAnimation}
              custom={staggerChildrenDefault * 2}
            >
              <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
            </motion.div>
          </motion.header>
        </NotDesktop>
        <ProjectList ref={projectListRef} projects={packagingProjects} />
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
