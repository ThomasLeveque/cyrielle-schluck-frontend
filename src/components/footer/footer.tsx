import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery, gql } from '@apollo/client';

import { buttonYVariants, buttonXVariants, buttonTransition } from '@animations/footer.animation';
import { initializeApollo } from '@lib/apolloClient';
import { Project, ProjectsData } from '@interfaces/project.interface';
import NextButton from '../../../public/static/next.svg';
import PrevButton from '../../../public/static/previous.svg';
import NotMobile from '@components/responsive/not-mobile';
import Mobile from '@components/responsive/mobile';

import { FooterStyles } from './footer.styles';

export const ALL_PROJECTS_SLUG_QUERY = gql`
  query {
    projects {
      slug
    }
  }
`;

interface footerProps {}

const Footer: React.FC<footerProps> = () => {
  const router = useRouter();
  const { projectSlug } = router.query;

  const { data } = useQuery<ProjectsData>(ALL_PROJECTS_SLUG_QUERY);
  const projects = data?.projects as Project[];

  const currentProject = projects?.find((project: Project) => project.slug === projectSlug);
  const currentProjectIndex = projects?.indexOf(currentProject as Project);

  const handleNextProject = (): void => {
    let nextProjectIndex = currentProjectIndex + 1;

    if (currentProjectIndex === projects.length - 1) {
      nextProjectIndex = 0;
    }

    const nextProjectSlug = projects[nextProjectIndex].slug;
    router.push(`/${nextProjectSlug}`);
  };

  const handlePreviousProject = (): void => {
    let nextProjectIndex = currentProjectIndex - 1;

    if (currentProjectIndex === 0) {
      nextProjectIndex = projects.length - 1;
    }

    const nextProjectSlug = projects[nextProjectIndex].slug;
    router.push(`/${nextProjectSlug}`);
  };

  return (
    <FooterStyles>
      <AnimatePresence>
        {projectSlug && (
          <React.Fragment key="prevButtonWrapper">
            <Mobile>
              <motion.button
                key="prevMobileButton"
                variants={buttonXVariants}
                custom={-5}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={buttonTransition}
                onClick={handlePreviousProject}
              >
                <PrevButton />
              </motion.button>
            </Mobile>
            <NotMobile>
              <motion.button
                key="prevNotMobileButton"
                variants={buttonYVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={buttonTransition}
                onClick={handlePreviousProject}
              >
                {'< PROJET PRÉCÉDENT'}
              </motion.button>
            </NotMobile>
          </React.Fragment>
        )}
        <p>
          <span>Contactez-moi : </span>cyrielle.schluck@gmail.com
        </p>
        {projectSlug && (
          <React.Fragment key="nextButtonWrapper">
            <Mobile>
              <motion.button
                key="nextMobileButton"
                variants={buttonXVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={buttonTransition}
                onClick={handlePreviousProject}
              >
                <NextButton />
              </motion.button>
            </Mobile>
            <NotMobile>
              <motion.button
                key="nextNotMobileButton"
                variants={buttonYVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={buttonTransition}
                onClick={handleNextProject}
              >
                {'PROJET SUIVANT >'}
              </motion.button>
            </NotMobile>
          </React.Fragment>
        )}
      </AnimatePresence>
    </FooterStyles>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_PROJECTS_SLUG_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 60,
  };
};

export default Footer;
