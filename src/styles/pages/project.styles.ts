import styled from 'styled-components';

import { fixHexaColor } from '@utils/color.util';

interface ProjectStylesProps {
  bgColor: string;
}

export const ProjectStyles = styled.div<ProjectStylesProps>`
  header {
    position: relative;
    padding-top: ${(props) => props.theme.vars.topLayoutPadding}px;

    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      bottom: ${(props) => props.theme.vars.xlSpace}px;
      left: 0;
      right: 0;
      display: block;
      background-color: ${(props) => fixHexaColor(props.bgColor)};
    }

    .header-texts {
      display: flex;
      margin-bottom: ${(props) => props.theme.vars.xlSpace}px;

      &-headings {
        margin-right: ${(props) => props.theme.vars.mSpace}px;
        white-space: nowrap;
      }
    }

    img {
      width: 800px;
      max-width: 100%;
      margin: 0 auto;
      margin-top: ${(props) => props.theme.vars.xlSpace}px;
    }
  }
`;
