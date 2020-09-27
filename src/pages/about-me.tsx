import React, { useContext } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';
import { initializeApollo } from '@lib/apolloClient';
import ReactMarkdown from 'react-markdown';

import Layout from '@components/layout/layout';
import CustomButton from '@components/custom-button/custom-button';
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
          text
          source
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

  return (
    <Layout title="About me">
      <AboutMeStyles as={motion.div} initial="initial" animate="animate" variants={stagger}>
        <motion.img
          variants={itemVariants}
          src={`${process.env.NEXT_PUBLIC_API_URL}${aboutMe.image.url}`}
        />
        <HeadingStyles mb={50}>
          <motion.div variants={itemVariants}>
            <span>Cyrielle</span>,
          </motion.div>
          <motion.div variants={itemVariants}>
            Designer UI<span>/</span>UX<span>.</span>
          </motion.div>
        </HeadingStyles>
        <motion.div variants={itemVariants}>
          <PStyles as={ReactMarkdown} escapeHtml={false} letterSpacing={1} mb={theme.vars.lSpace}>
            {aboutMe.desc}
          </PStyles>
        </motion.div>
        <motion.div variants={itemVariants}>
          <CustomButton text="Voir mon cv" />
          <CustomButton text="Télécharger mon cv" />
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
