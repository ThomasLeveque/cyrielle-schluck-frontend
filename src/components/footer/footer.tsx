import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useQuery, gql } from '@apollo/client';

import NotMobile from '@components/responsive/not-mobile';
import Mobile from '@components/responsive/mobile';
import { Project, ProjectsData } from '@interfaces/project.interface';

import NextButton from '@components/icons/next-button';
import PrevButton from '@components/icons/previous-button';
import { transition } from '@animations/global.animation';

import { FooterStyles } from './footer.styles';
import useInView from 'react-cool-inview';

export const ALL_PROJECTS_SLUG_QUERY = gql`
  query {
    projects {
      slug
    }
  }
`;

const buttonTransition = { ...transition, delay: 0.15 };
const buttonY = 10;
const buttonX = 10;

const Footer: React.FC = () => {
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
    router.push(`/${nextProjectSlug}`, undefined, { scroll: false });
  };

  const handlePreviousProject = (): void => {
    let nextProjectIndex = currentProjectIndex - 1;

    if (currentProjectIndex === 0) {
      nextProjectIndex = projects.length - 1;
    }

    const nextProjectSlug = projects[nextProjectIndex].slug;
    router.push(`/${nextProjectSlug}`, undefined, { scroll: false });
  };

  const { observe, inView } = useInView<HTMLDivElement>();

  return (
    <FooterStyles>
      {projectSlug && <div className="toggle-footer-detector" ref={observe} />}
      <motion.div
        className="footer-content"
        initial={{ opacity: projectSlug ? 0 : 1, y: projectSlug ? 60 : 0 }}
        animate={{ opacity: inView ? 0 : 1, y: inView ? 60 : 0 }}
        transition={transition}
      >
        {projectSlug && (
          <>
            <Mobile>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: inView ? 0 : 1,
                  x: inView ? -buttonX : 0,
                  transition: buttonTransition,
                }}
                onClick={handlePreviousProject}
              >
                <PrevButton />
              </motion.button>
            </Mobile>
            <NotMobile>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: inView ? 0 : 1,
                  y: inView ? buttonY : 0,
                  transition: buttonTransition,
                }}
                onClick={handlePreviousProject}
              >
                {'< PROJET PRÉCÉDENT'}
              </motion.button>
            </NotMobile>
          </>
        )}
        <p>
          <span>Contactez-moi : </span>cyrielle.schluck@gmail.com
        </p>
        {projectSlug && (
          <>
            <Mobile>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: inView ? 0 : 1,
                  x: inView ? buttonX : 0,
                  transition: buttonTransition,
                }}
                onClick={handlePreviousProject}
              >
                <NextButton />
              </motion.button>
            </Mobile>
            <NotMobile>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: inView ? 0 : 1,
                  y: inView ? buttonY : 0,
                  transition: buttonTransition,
                }}
                onClick={handleNextProject}
              >
                {'PROJET SUIVANT >'}
              </motion.button>
            </NotMobile>
          </>
        )}
      </motion.div>
    </FooterStyles>
  );
};

export default Footer;
