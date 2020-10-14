import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { rgba } from 'polished';
import ReactMarkdown from 'react-markdown';

import StepItems from '@components/step-items/step-items';
import { ProjectStep as ProjectStepType } from '@interfaces/project.interface';

import { ProjectStepStyles } from './project-step.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';
import { PStyles } from '@styles/texts/p.styles';

interface ProjectStepProps {
  projectStep: ProjectStepType;
}

const ProjectStep: React.FC<ProjectStepProps> = ({ projectStep }) => {
  const theme = useContext(ThemeContext);

  return (
    <ProjectStepStyles bgColor={projectStep.bgColor}>
      <header className="project-step-header">
        <HeadingStyles
          as="h4"
          fontSize={28}
          lineHeight={34}
          isUppercase
          color={rgba(theme.colors.black, 0.15)}
          fontFamily={theme.fonts.mainFont}
          mb={15}
        >
          {projectStep.subtitle}
        </HeadingStyles>
        <HeadingStyles as="h3" fontSize={80} lineHeight={90} mb={0}>
          {projectStep.title}
        </HeadingStyles>
        <PStyles
          as={ReactMarkdown}
          className="with-text-list"
          escapeHtml={false}
          fontSize={18}
          lineHeight={30}
          letterSpacing={0.8}
          mt={theme.vars.lSpace}
        >
          {projectStep.description}
        </PStyles>
      </header>
      <StepItems stepItems={projectStep.stepItems} />
    </ProjectStepStyles>
  );
};

export default ProjectStep;
