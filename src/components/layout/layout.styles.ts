import styled from 'styled-components';
import { math } from 'polished';

export const LayoutStyles = styled.main`
  width: 100%;
  max-width: ${(props) => props.theme.vars.appMaxWidth}px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 0 ${(props) => props.theme.vars.lSpace}px
    ${(props) => math(`${props.theme.vars.mSpace}px + ${props.theme.vars.footerHeight}px`)};
`;
