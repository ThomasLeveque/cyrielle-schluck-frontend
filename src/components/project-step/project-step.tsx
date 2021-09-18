import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import ReactMarkdown from 'react-markdown';
import { motion, useAnimation } from 'framer-motion';
import useInView from 'react-cool-inview';

import StepItems from '@components/step-items/step-items';
import { itemVariants } from '@animations/global.animation';
import { ProjectStep as ProjectStepType } from '@interfaces/project.interface';

import { ProjectStepStyles } from './project-step.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';
import { PStyles } from '@styles/texts/p.styles';

interface ProjectStepProps {
  projectStep: ProjectStepType;
}

const ProjectStep: React.FC<ProjectStepProps> = ({ projectStep }) => {
  const theme = useContext(ThemeContext);
  const projectStepAnimation = useAnimation();
  const { observe } = useInView<HTMLElement>({
    threshold: 0.6,
    unobserveOnEnter: true,
    onEnter: () => projectStepAnimation.start('animate'),
  });

  return (
    <ProjectStepStyles bgColor={projectStep.bgColor}>
      {projectStep.subtitle || projectStep.title || projectStep.description ? (
        <motion.header
          ref={observe}
          animate={projectStepAnimation}
          initial="initial"
          variants={itemVariants}
          custom={30}
          className="project-step-header"
        >
          {projectStep.subtitle && (
            <HeadingStyles
              as="h4"
              fontSize={28}
              lineHeight={1.2}
              isUppercase
              color={rgba(theme.colors.black, 0.15)}
              fontFamily={theme.fonts.mainFont}
              mb={15}
            >
              {projectStep.subtitle}
            </HeadingStyles>
          )}
          {projectStep.title && (
            <HeadingStyles as="h3" fontSize={80} lineHeight={1.125} mb={0}>
              {projectStep.title}
            </HeadingStyles>
          )}
          {projectStep.description && (
            <PStyles
              as={ReactMarkdown}
              className="with-text-list"
              escapeHtml={false}
              fontSize={18}
              lineHeight={1.65}
              letterSpacing={0.8}
              mt={theme.vars.lSpace}
            >
              {projectStep.description}
            </PStyles>
          )}
        </motion.header>
      ) : null}
      <StepItems stepItems={projectStep.stepItems} />
    </ProjectStepStyles>
  );
};

export default ProjectStep;
