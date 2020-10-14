import { fixHexaColor } from '@utils/color.util';
import styled, { css } from 'styled-components';

interface ProjectStepStylesProps {
  bgColor?: string;
}

export const ProjectStepStyles = styled.section<ProjectStepStylesProps>`
  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${(props: ProjectStepStylesProps) => fixHexaColor(props.bgColor as string)};
      padding: ${(props) => props.theme.vars.xlSpace}px;
    `}

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.vars.xlSpace}px;
  }

  header.project-step-header {
    margin-bottom: ${(props) => props.theme.vars.xlSpace}px;
  }
`;
