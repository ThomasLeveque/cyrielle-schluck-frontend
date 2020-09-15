import styled from 'styled-components';
import { math } from 'polished';

export const LayoutStyles = styled.main`
  max-width: 100%;
  width: ${(props) => props.theme.vars.appMaxWidth}px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.vars.lSpace}px
    ${(props) => math(`${props.theme.vars.mSpace}px + ${props.theme.vars.footerHeight}px`)};
`;
