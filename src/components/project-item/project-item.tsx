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
import NotMobile from '@components/responsive/not-mobile';
import Mobile from '@components/responsive/mobile';
import MyImage from '@components/my-image/my-image';
import { fixImgUrl } from '@utils/env-url.util';

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

  const projectItemImageUrl = fixImgUrl(project.image.url);

  return (
    <ProjectItemStyles
      ref={ref}
      as={motion.li}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
      transition={transition}
      bgColor={project.color}
    >
      <Link href={`/${project.slug}`} scroll={false}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
            <NotMobile>
              <HeadingStyles
                as="h3"
                fontSize={30}
                lineHeight={1.4}
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
            </NotMobile>
            <Mobile>
              {project.mobileName ? (
                <HeadingStyles
                  className="mobile-name"
                  source={project.mobileName}
                  as={ReactMarkdown}
                  escapeHtml={false}
                  fontSize={30}
                  lineHeight={1.4}
                  mb={theme.vars.xsSpace}
                  color={theme.colors[project.textsColor]}
                />
              ) : (
                <HeadingStyles
                  as="h3"
                  fontSize={30}
                  lineHeight={1.4}
                  mb={theme.vars.xsSpace}
                  color={theme.colors[project.textsColor]}
                >
                  {project.name}
                </HeadingStyles>
              )}
            </Mobile>
          </div>
          <MyImage
            width={project.image.width}
            height={project.image.height}
            src={projectItemImageUrl}
            alt={project.image.alternativeText}
            priority
          />
        </a>
      </Link>
    </ProjectItemStyles>
  );
};

export default ProjectItem;
