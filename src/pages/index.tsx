import React, { useContext, useMemo } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
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
import { Home, HomeData } from '@interfaces/home.interface';

export const HOME_QUERY = gql`
  query {
    home {
      name
      title
      desc
      projectList {
        ... on ComponentBlockProjectItem {
          project {
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
      }
    }
  }
`;

const HomePage: NextPage = () => {
  const { data, loading } = useQuery<HomeData>(HOME_QUERY);
  const home = data?.home as Home;

  const projects = useMemo(() => home.projectList.map((p) => p.project), [home.projectList]);

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
        </NotDesktop>
        <ProjectList projects={projects} />
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
