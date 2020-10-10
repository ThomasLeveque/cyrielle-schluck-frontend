import styled from 'styled-components';

import { textsColorType } from '@interfaces/project.interface';

interface NavStylesProps {
  textsColor: textsColorType;
}

export const NavStyles = styled.nav<NavStylesProps>`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: ${(props) => props.theme.vars.mSpace}px;
  z-index: 1000;
  left: ${(props) => props.theme.vars.lSpace}px;
  right: ${(props) => props.theme.vars.lSpace}px;

  a {
    color: ${(props) => props.theme.colors[props.textsColor] || props.theme.colors.myBlack};

    span {
      background-color: ${(props) =>
        props.theme.colors[props.textsColor] || props.theme.colors.myBlack};
    }

    &:not(:first-of-type) {
      margin-left: ${(props) => props.theme.vars.lSpace}px;
    }
  }
`;
