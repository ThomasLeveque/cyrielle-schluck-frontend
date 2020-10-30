import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import ReactMarkdown from 'react-markdown';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      projectStepAnimation.start('animate');
    }
  }, [projectStepAnimation, inView]);

  return (
    <ProjectStepStyles bgColor={projectStep.bgColor}>
      <motion.header
        ref={ref}
        animate={projectStepAnimation}
        initial="initial"
        variants={itemVariants}
        custom={30}
        className="project-step-header"
      >
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
        <HeadingStyles as="h3" fontSize={80} lineHeight={1.125} mb={0}>
          {projectStep.title}
        </HeadingStyles>
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
      <StepItems stepItems={projectStep.stepItems} />
    </ProjectStepStyles>
  );
};

export default ProjectStep;
