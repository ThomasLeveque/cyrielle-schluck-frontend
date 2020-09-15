import React, { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Project } from '@interfaces/project.interface';
import { fixhyphens } from '@utils/text.util';

import { ProjectItemStyles } from './project-item.styles';
import { PStyles } from '@styles/texts/p.styles';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const theme = useContext(ThemeContext);

  return (
    <ProjectItemStyles bgColor={project.color}>
      <Link href="projects/[projectId]" as={`projects/${project.id}`}>
        <a>
          <div>
            <h4>{project.category?.name}</h4>
            <h3>{project.name}</h3>
            <PStyles source={fixhyphens(project.shortDesc)} as={ReactMarkdown} fontSize={16} lineHeight={22} color={theme.colors.myWhite}></PStyles>
          </div>
          <img src={`${process.env.NEXT_PUBLIC_API_URL}${project.image.url}`} />
        </a>
      </Link>
    </ProjectItemStyles>
  );
};

export default ProjectItem;
