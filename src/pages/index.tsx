import React, { useContext, useMemo } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { ThemeContext } from 'styled-components';
import useInView from 'react-cool-inview';
import { motion, useAnimation } from 'framer-motion';

import Layout from '@components/layout/layout';
import { initializeApollo } from '@lib/apolloClient';
import CustomButton from '@components/custom-button/custom-button';
import ProjectList from '@components/project-list/project-list';
import { itemVariants, stagger } from '@animations/global.animation';
import Desktop from '@components/responsive/desktop';
import HomeInfosDesktop from '@components/home-infos-desktop/home-infos-desktop';
import NotDesktop from '@components/responsive/not-desktop';

import { IndexStyles } from '@styles/pages/index.styles';
import { PStyles } from '@styles/texts/p.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';
import { HomeData } from '@interfaces/home.interface';
import { HOME_QUERY } from '@lib/gqlQueries';

const HomePage: NextPage = () => {
  const { data, loading } = useQuery<HomeData>(HOME_QUERY);
  const home = data?.home;

  const webProjects = useMemo(
    () =>
      home?.superCategoryList
        .find((c) => c.superCategory === 'web')
        ?.projectList.map((p) => p.project) ?? [],
    [home?.superCategoryList]
  );

  const printProjects = useMemo(
    () =>
      home?.superCategoryList
        .find((c) => c.superCategory === 'print')
        ?.projectList.map((p) => p.project) ?? [],
    [home?.superCategoryList]
  );

  const router = useRouter();
  const theme = useContext(ThemeContext);

  const gotoAboutMe = (): void => {
    router.push('/plus-sur-moi', undefined, { scroll: false });
  };

  const firstTitleMobileAnimation = useAnimation();
  const secondTitleMobileAnimation = useAnimation();

  const { observe: firstTitleObserve } = useInView({
    threshold: 0.5,
    unobserveOnEnter: true,
    onEnter: () => firstTitleMobileAnimation.start('animate'),
  });

  const { observe: secondTitleObserve } = useInView({
    threshold: 0.5,
    unobserveOnEnter: true,
    onEnter: () => secondTitleMobileAnimation.start('animate'),
  });

  const {
    observe: printProjectsObserve,
    entry: printProjectsEntry,
    inView: printProjectsInView,
  } = useInView({
    threshold: 0.3,
  });

  if (loading || !home) {
    return <Layout>Loading...</Layout>;
  }

  // SEO is inside next-seo.config file for the home page
  return (
    <Layout>
      <IndexStyles>
        <Desktop>
          <HomeInfosDesktop
            gotoAboutMe={gotoAboutMe}
            home={home}
            printProjectsInView={printProjectsInView}
            printProjectsEntry={printProjectsEntry}
          />
          <div className="desktop-projects secure-bottom-space">
            {webProjects && <ProjectList projects={webProjects} />}
            {printProjects && (
              <ProjectList
                ref={printProjectsObserve}
                className="print-projects"
                projects={printProjects}
              />
            )}
          </div>
        </Desktop>
        <NotDesktop>
          <motion.header
            className="home-infos-not-desktop-header"
            initial="initial"
            animate={firstTitleMobileAnimation}
            variants={stagger}
            ref={firstTitleObserve}
          >
            <HeadingStyles mb={theme.vars.lSpace} fontSize={70}>
              <motion.div variants={itemVariants}>
                <span className="color-gray">{home.name}</span>,
              </motion.div>
              <motion.div variants={itemVariants}>
                {home.title}
                <span className="color-gray">.</span>
              </motion.div>
            </HeadingStyles>
            <PStyles as={motion.p} variants={itemVariants} letterSpacing={1} mb={theme.vars.lSpace}>
              {home.desc}
            </PStyles>
            <motion.div variants={itemVariants}>
              <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
            </motion.div>
          </motion.header>
          {webProjects && <ProjectList className="mobile-projects" projects={webProjects} />}
          <motion.header
            className="home-infos-not-desktop-header print"
            initial="initial"
            animate={secondTitleMobileAnimation}
            variants={stagger}
            ref={secondTitleObserve}
          >
            <HeadingStyles mb={theme.vars.lSpace} fontSize={70}>
              <motion.div variants={itemVariants}>{home.printTitle}</motion.div>
            </HeadingStyles>
            <PStyles as={motion.p} variants={itemVariants} letterSpacing={1} mb={theme.vars.lSpace}>
              {home.printDesc}
            </PStyles>
            <motion.div variants={itemVariants}>
              <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
            </motion.div>
          </motion.header>
          {printProjects && (
            <ProjectList className="mobile-projects secure-bottom-space" projects={printProjects} />
          )}
        </NotDesktop>
      </IndexStyles>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HOME_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 30,
  };
};

export default HomePage;
