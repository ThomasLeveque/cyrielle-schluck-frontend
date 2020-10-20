import React, { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { rgba } from 'polished';

import { Project } from '@interfaces/project.interface';
import { fixhyphens } from '@utils/text.util';
import { transition } from '@animations/global.animation';

import { ProjectItemStyles } from './project-item.styles';
import { PStyles } from '@styles/texts/p.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';

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
    >
      <Link href="/[projectSlug]" as={`/${project.slug}`} scroll={false}>
        <a>
          <div>
            <HeadingStyles
              as="h4"
              fontSize={18}
              lineHeight={1.15}
              mb={10}
              isUppercase
              color={rgba(theme.colors.black, 0.15)}
              fontFamily={theme.fonts.mainFont}
            >
              {project.category?.name}
            </HeadingStyles>
            <HeadingStyles
              as="h3"
              fontSize={30}
              lineHeight={1.12}
              mb={theme.vars.xsSpace}
              color={theme.colors[project.textsColor]}
            >
              {project.name}
            </HeadingStyles>
            <PStyles
              source={fixhyphens(project.shortDesc)}
              as={ReactMarkdown}
              escapeHtml={false}
              fontSize={16}
              lineHeight={1.375}
              color={theme.colors[project.textsColor]}
            />
          </div>
          <img src={`${process.env.NEXT_PUBLIC_API_URL}${project.image.url}`} />
        </a>
      </Link>
    </ProjectItemStyles>
  );
};

export default ProjectItem;
