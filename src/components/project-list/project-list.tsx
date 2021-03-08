import React from 'react';

import { Project } from '@interfaces/project.interface';
import ProjectItem from '@components/project-item/project-item';

import { ProjectListStyles } from './project-list.styles';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <ProjectListStyles className="secure-bottom-space">
      {projects.map((project: Project) => (
        <ProjectItem project={project} key={project.slug} />
      ))}
    </ProjectListStyles>
  );
};

export default ProjectList;
