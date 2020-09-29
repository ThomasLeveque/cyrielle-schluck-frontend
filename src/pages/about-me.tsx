import React, { useContext } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';
import { initializeApollo } from '@lib/apolloClient';
import ReactMarkdown from 'react-markdown';
import { useInView } from 'react-intersection-observer';

import Layout from '@components/layout/layout';
import CustomButton from '@components/custom-button/custom-button';
import RecoList from '@components/reco-list/reco-list';
import { AboutMeData } from '@interfaces/about-me.interface';
import { stagger, itemVariants } from '@animations/global.animation';

import { AboutMeStyles } from '@styles/pages/about-me.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';
import { PStyles } from '@styles/texts/p.styles';

const ABOUT_ME_QUERY = gql`
  query {
    aboutMe {
      image {
        url
      }
      desc
      recos {
        ... on ComponentBlockReco {
          id
          text
          source
          sourceUrl
        }
      }
    }
  }
`;

interface AboutMeProps {}

const AboutMe: NextPage<AboutMeProps> = () => {
  const { data } = useQuery<AboutMeData>(ABOUT_ME_QUERY);
  const theme = useContext(ThemeContext);

  const { aboutMe } = data as AboutMeData;

  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <Layout title="About me">
      <AboutMeStyles as={motion.div} initial="initial" animate="animate" variants={stagger}>
        <motion.img
          variants={itemVariants}
          src={`${process.env.NEXT_PUBLIC_API_URL}${aboutMe.image.url}`}
        />
        <HeadingStyles mb={50}>
          <motion.div variants={itemVariants}>
            <span className="color-gray">Cyrielle</span>,
          </motion.div>
          <motion.div variants={itemVariants}>
            Designer UI<span className="color-gray">/</span>UX<span className="color-gray">.</span>
          </motion.div>
        </HeadingStyles>
        <motion.div className="about-me-desc" variants={itemVariants}>
          <PStyles as={ReactMarkdown} escapeHtml={false} letterSpacing={1} mb={theme.vars.lSpace}>
            {aboutMe.desc}
          </PStyles>
        </motion.div>
        <motion.div variants={itemVariants}>
          <CustomButton text="Voir mon cv" />
          <CustomButton text="Télécharger mon cv" />
        </motion.div>
        <motion.div ref={ref} animate={inView ? 'animate' : 'initial'} variants={itemVariants}>
          <RecoList recos={aboutMe.recos} />
        </motion.div>
      </AboutMeStyles>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ABOUT_ME_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default AboutMe;
