import React, { useContext, useEffect } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { ThemeContext } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import {
  motion,
  useViewportScroll,
  useTransform,
  MotionValue,
  transform,
  AnimatePresence,
} from 'framer-motion';

import Layout from '@components/layout/layout';
import { initializeApollo } from '@lib/apolloClient';
import { Project, ProjectsData } from '@interfaces/project.interface';
import CustomButton from '@components/custom-button/custom-button';
import ProjectList from '@components/project-list/project-list';
import { itemVariants, stagger, transition } from '@animations/global.animation';

import { IndexStyles } from '@styles/pages/index.styles';
import { PStyles } from '@styles/texts/p.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';

const ALL_PROJECTS_QUERY = gql`
  query {
    projects {
      id
      name
      shortDesc
      desc
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
    }
  }
`;

const exit = { opacity: 0, transition: { ...transition, duration: 0.2 } };

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  const { data } = useQuery<ProjectsData>(ALL_PROJECTS_QUERY);
  const router = useRouter();
  const theme = useContext(ThemeContext);

  const minScrollY = 100;
  const maxScrollY = 280;
  const maxScaleH1 = 0.58;
  const maxYH1 = -100;
  const maxYDesc = maxYH1 - theme.vars.lSpace + theme.vars.mSpace;

  useEffect(() => handleInitialStyle(), []);

  const { scrollY } = useViewportScroll();
  const scaleH1 = useTransform(scrollY, [minScrollY, maxScrollY], [1, maxScaleH1]);
  const yH1: MotionValue = useTransform(scrollY, [minScrollY, maxScrollY], [0, maxYH1]);
  const yDesc = useTransform(scrollY, [minScrollY, maxScrollY], [0, maxYDesc]);

  const { projects } = data as ProjectsData;

  const handleInitialStyle = () => {
    const initialScaleH1 = transform(window.scrollY, [minScrollY, maxScrollY], [1, maxScaleH1]);
    const initialyH1 = transform(window.scrollY, [minScrollY, maxScrollY], [0, maxYH1]);
    const initialyDesc = transform(window.scrollY, [minScrollY, maxScrollY], [0, maxYDesc]);
    scaleH1.set(initialScaleH1);
    yH1.set(initialyH1);
    yDesc.set(initialyDesc);
  };

  const { ref: projectListRef, entry } = useInView({
    rootMargin: `-350px`,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <Layout title="Home">
      <IndexStyles as={motion.section}>
        <div className="infos">
          {entry && (
            <AnimatePresence exitBeforeEnter>
              {entry?.isIntersecting ? (
                <motion.div
                  key="secondaryInfos"
                  animate="animate"
                  initial="initial"
                  variants={stagger}
                  exit={exit}
                >
                  <HeadingStyles
                    as={motion.h2}
                    variants={itemVariants}
                    fontSize={60}
                    lineHeight={84}
                    mb={50}
                  >
                    Projets identité visuelle et packaging
                  </HeadingStyles>
                  <PStyles
                    as={motion.p}
                    variants={itemVariants}
                    letterSpacing={1}
                    mb={theme.vars.lSpace}
                  >
                    Un master en design graphique a ajouté d’autres cordes à mon arc.
                  </PStyles>
                  <motion.div variants={itemVariants}>
                    <CustomButton text="En savoir plus" onClick={() => router.push('/about-me')} />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="mainInfos"
                  animate="animate"
                  initial="initial"
                  variants={stagger}
                  exit={exit}
                >
                  <HeadingStyles as={motion.h1} style={{ scale: scaleH1, y: yH1 }}>
                    <motion.div variants={itemVariants}>
                      <span className="color-gray">Cyrielle</span>,
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      Designer UI<span className="color-gray">/</span>UX
                      <span className="color-gray">.</span>
                    </motion.div>
                  </HeadingStyles>
                  <motion.div style={{ y: yDesc }}>
                    <PStyles
                      as={motion.p}
                      variants={itemVariants}
                      letterSpacing={1}
                      mb={theme.vars.lSpace}
                    >
                      Designer UI & UX avec plus de 3 ans d’expérience, je mets l’utilisateur au
                      centre de mon travail ergonomique et graphique afin de lui assurer la
                      meilleure expérience possible.
                    </PStyles>
                    <motion.div variants={itemVariants}>
                      <CustomButton
                        text="En savoir plus"
                        onClick={() => router.push('/about-me')}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
        <ProjectList
          projects={projects.filter(
            ({ category }: Project) =>
              category.slug === 'ui-design' || category.slug === 'ux-ui-design'
          )}
        />
        <ProjectList
          ref={projectListRef}
          projects={projects.filter(({ category }: Project) => category.slug === 'packaging')}
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
    revalidate: 1,
  };
};

export default Home;
