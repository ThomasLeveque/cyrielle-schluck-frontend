import styled from 'styled-components';

import { fixHexaColor } from '@utils/color.util';

interface ProjectStylesProps {
  bgColor: string;
}

export const ProjectStyles = styled.div<ProjectStylesProps>`
  header {
    padding-top: ${(props) => props.theme.vars.topLayoutPadding}px;
    background-color: ${(props) => fixHexaColor(props.bgColor)};

    .header-texts {
      display: flex;

      &-headings {
        margin-right: ${(props) => props.theme.vars.mSpace}px;
        white-space: nowrap;
      }
    }
  }
`;
