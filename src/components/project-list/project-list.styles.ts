import styled from 'styled-components';

interface ProjectListStylesProps {
  top?: number;
}

export const ProjectListStyles = styled.ul<ProjectListStylesProps>``;

ProjectListStyles.defaultProps = {
  top: 0,
};
