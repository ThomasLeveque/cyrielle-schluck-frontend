import styled from 'styled-components';
import { math } from 'polished';

export const NavStyles = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 40px;
  z-index: 1000;
  left: ${(props) => props.theme.vars.lSpace}px;
  right: ${(props) => props.theme.vars.lSpace}px;

  a:not(:first-of-type) {
    margin-left: ${(props) => props.theme.vars.lSpace}px;
  }
`;
