import styled from 'styled-components';

import { fixHexaColor } from '@utils/color.util';

interface ProjectItemStylesProps {
  bgColor: string;
}

export const ProjectItemStyles = styled.li<ProjectItemStylesProps>`
  background-color: ${(props) => fixHexaColor(props.bgColor)};
  height: 330px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.vars.xSpace}px;
  }

  a {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;

    > div {
      padding: 0 ${(props) => props.theme.vars.mSpace}px;
      min-width: 300px;
    }

    img {
      width: 400px;
    }
  }
`;
