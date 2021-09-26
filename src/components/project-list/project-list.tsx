import React from 'react';

import { Project } from '@interfaces/project.interface';
import ProjectItem from '@components/project-item/project-item';

import { ProjectListStyles } from './project-list.styles';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

const ProjectList = React.forwardRef<HTMLUListElement, ProjectListProps>(
  ({ projects, className }, ref) => {
    return (
      <ProjectListStyles className={className} ref={ref}>
        {projects.map((project: Project) => (
          <ProjectItem project={project} key={project.slug} />
        ))}
      </ProjectListStyles>
    );
  }
);

export default ProjectList;
