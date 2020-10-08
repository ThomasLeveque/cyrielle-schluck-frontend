import React, { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { Project } from '@interfaces/project.interface';
import { fixhyphens } from '@utils/text.util';
import { transition } from '@animations/global.animation';

import { ProjectItemStyles } from './project-item.styles';
import { PStyles } from '@styles/texts/p.styles';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const theme = useContext(ThemeContext);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <ProjectItemStyles
      ref={ref}
      as={motion.li}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
      transition={transition}
      bgColor={project.color}
      textsColor={project.textsColor}
    >
      <Link href="/[projectSlug]" as={`/${project.slug}`} scroll={false}>
        <a>
          <div>
            <h4>{project.category?.name}</h4>
            <h3>{project.name}</h3>
            <PStyles
              source={fixhyphens(project.shortDesc)}
              as={ReactMarkdown}
              escapeHtml={false}
              fontSize={16}
              lineHeight={22}
              color={theme.colors[project.textsColor]}
            ></PStyles>
          </div>
          <img src={`${process.env.NEXT_PUBLIC_API_URL}${project.image.url}`} />
        </a>
      </Link>
    </ProjectItemStyles>
  );
};

export default ProjectItem;
