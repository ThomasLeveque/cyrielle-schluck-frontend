import React, { useContext } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';
import { initializeApollo } from '@lib/apolloClient';
import ReactMarkdown from 'react-markdown';
import { useMediaQuery } from 'react-responsive';

import Layout from '@components/layout/layout';
import CustomButton from '@components/custom-button/custom-button';
import RecoList from '@components/reco-list/reco-list';
import { AboutMeData } from '@interfaces/about-me.interface';
import { stagger, itemVariants } from '@animations/global.animation';
import downloadResource from '@lib/downloadResource';
import { fixEnvUrl } from '@utils/env-url.util';
import MyImage from '@components/my-image/my-image';
import { generateIsMobileMediaQuery } from '@components/responsive/mobile';

import { AboutMeStyles } from '@styles/pages/about-me.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';
import { PStyles } from '@styles/texts/p.styles';

const ABOUT_ME_QUERY = gql`
  query {
    aboutMe {
      image {
        url
        alternativeText
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
  const { data, loading } = useQuery<AboutMeData>(ABOUT_ME_QUERY);
  const theme = useContext(ThemeContext);
  const { aboutMe } = data as AboutMeData;

  const cvUrl = fixEnvUrl(aboutMe.cv.url);

  const aboutMeImageUrl = fixEnvUrl(aboutMe.image.url);

  const handleCVReveal = (): void => {
    window.open(cvUrl, '_blank');
  };

  const isMobile = useMediaQuery(generateIsMobileMediaQuery(theme));

  const SEO: NextSeoProps = {
    title: 'Plus sur moi',
    description: 'Moi c’est Cyrielle, designer spécialisée en expérience et interface utilisateur.',
  };

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <NextSeo {...SEO} />
      <AboutMeStyles as={motion.div} initial="initial" animate="animate" variants={stagger}>
        {aboutMe.image && (
          <motion.div variants={itemVariants}>
            <MyImage
              width={isMobile ? 130 : 200}
              height={isMobile ? 130 : 200}
              src={aboutMeImageUrl}
              alt={aboutMe.image.alternativeText}
            />
          </motion.div>
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
        <motion.div variants={itemVariants} className="buttons">
          <CustomButton onClick={handleCVReveal} text="Voir mon cv" />
          <CustomButton
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
    revalidate: 30,
  };
};

export default AboutMePage;