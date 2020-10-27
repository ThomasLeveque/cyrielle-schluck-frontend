import { fixHexaColor } from '@utils/color.util';
import { between, down, only } from 'styled-breakpoints';
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

      ${between('tablet', 'desktop')} {
        padding-left: ${(props) => props.theme.vars.lSpace}px;
        padding-right: ${(props) => props.theme.vars.lSpace}px;
      }

      ${down('mobile')} {
        padding: ${(props) => props.theme.vars.lSpace}px ${(props) => props.theme.vars.sSpace}px;
        margin-left: -${(props) => props.theme.vars.sSpace}px;
        margin-right: -${(props) => props.theme.vars.sSpace}px;
      }
    `}

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.vars.xlSpace}px;
  }

  header.project-step-header {
    margin-bottom: ${(props) => props.theme.vars.xlSpace}px;

    ${only('tablet')} {
      h3 {
        font-size: 60px;
      }
    }

    ${down('mobile')} {
      margin-bottom: ${(props) => props.theme.vars.lSpace}px;

      h3 {
        font-size: 40px;
      }

      h4 {
        font-size: 18px;
        margin-bottom: 10px;
      }

      > div {
        font-size: 14px;
        line-height: 2;
        margin-top: ${(props) => props.theme.vars.sSpace}px;
      }
    }
  }
`;
