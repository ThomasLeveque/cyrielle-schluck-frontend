import styled from 'styled-components';
import { math } from 'polished';

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: ${(props) => math(`${props.theme.vars.mSpace}px - 10px`)}
    ${(props) => props.theme.vars.mSpace}px ${(props) => props.theme.vars.lSpace}px;

  a:not(:first-of-type) {
    margin-left: ${(props) => props.theme.vars.mSpace}px;
  }
`;
