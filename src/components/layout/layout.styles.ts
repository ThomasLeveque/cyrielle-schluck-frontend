import styled from 'styled-components';
import { math } from 'polished';

export const LayoutStyles = styled.main`
  padding: 0 ${(props) => props.theme.vars.lSpace}px
    ${(props) => math(`${props.theme.vars.mSpace}px + ${props.theme.vars.footerHeight}px`)};
`;
