import React from 'react';

import ProjectStep from '@components/project-step/project-step';
import { ProjectStep as ProjectStepType } from '@interfaces/project.interface';

interface ProjectStepsProps {
  projectSteps: ProjectStepType[];
}

const ProjectSteps: React.FC<ProjectStepsProps> = ({ projectSteps }) => {
  return (
    <>
      {projectSteps.map((projectStep: ProjectStepType) => (
        <ProjectStep key={projectStep.id} projectStep={projectStep} />
      ))}
    </>
  );
};

export default ProjectSteps;
