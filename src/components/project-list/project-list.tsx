import React from 'react';

import { Project } from '@interfaces/project.interface';
import ProjectItem from '@components/project-item/project-item';

import { ProjectListStyles } from './project-list.styles';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = React.forwardRef<HTMLUListElement, ProjectListProps>(({ projects }, ref) => {
  return (
    <ProjectListStyles ref={ref}>
      {projects.map((project: Project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </ProjectListStyles>
  );
});

export default ProjectList;
