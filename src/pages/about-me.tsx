import React, { useContext } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';
import { initializeApollo } from '@lib/apolloClient';
import ReactMarkdown from 'react-markdown';

import Layout from '@components/layout/layout';
import CustomButton from '@components/custom-button/custom-button';
import RecoList from '@components/reco-list/reco-list';
import { AboutMeData } from '@interfaces/about-me.interface';
import { stagger, itemVariants } from '@animations/global.animation';
import downloadResource from '@lib/downloadResource';

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
      cv {
        url
      }
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

interface AboutMePageProps {}

const AboutMePage: NextPage<AboutMePageProps> = () => {
  const { data } = useQuery<AboutMeData>(ABOUT_ME_QUERY);
  const theme = useContext(ThemeContext);
  const { aboutMe } = data as AboutMeData;

  const cvUrl = `${process.env.NEXT_PUBLIC_API_URL}${aboutMe.cv.url}`;

  const handleCVReveal = (): void => {
    window.open(cvUrl, '_blank');
  };

  return (
    <Layout title="About me">
      <AboutMeStyles as={motion.div} initial="initial" animate="animate" variants={stagger}>
        {aboutMe.image && (
          <motion.img
            variants={itemVariants}
            src={`${process.env.NEXT_PUBLIC_API_URL}${aboutMe.image.url}`}
          />
        )}
        <HeadingStyles mb={theme.vars.lSpace}>
          <motion.div variants={itemVariants}>
            <span className="color-gray">Cyrielle</span>,
          </motion.div>
          <motion.div variants={itemVariants}>
            Designer UI<span className="color-gray">/</span>UX<span className="color-gray">.</span>
          </motion.div>
        </HeadingStyles>
        <motion.div className="with-text-list" variants={itemVariants}>
          <PStyles as={ReactMarkdown} escapeHtml={false} letterSpacing={1} mb={theme.vars.xlSpace}>
            {aboutMe.desc}
          </PStyles>
        </motion.div>
        <motion.div variants={itemVariants}>
          <CustomButton onClick={handleCVReveal} text="Voir mon cv" />
          <CustomButton
            style={{ marginLeft: theme.vars.lSpace }}
            onClick={() => downloadResource(cvUrl, 'Cyrielle-Schluck-CV')}
            text="Télécharger mon cv"
          />
        </motion.div>
        {aboutMe.recos.length > 0 && <RecoList recos={aboutMe.recos} />}
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

export default AboutMePage;
