import styled from 'styled-components';
import { math } from 'polished';
import { up, down, between, only } from 'styled-breakpoints';

export const LayoutStyles = styled.main`
  max-width: 100%;
  width: ${(props) => props.theme.vars.appMaxWidth}px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.vars.xlSpace}px
    ${(props) => math(`${props.theme.vars.lSpace}px + ${props.theme.vars.footerHeight}px`)};

  ${down('tablet')} {
    padding-right: ${(props) => props.theme.vars.lSpace}px;
    padding-left: ${(props) => props.theme.vars.lSpace}px;
  }

  ${down('mobile')} {
    padding-right: ${(props) => props.theme.vars.xSpace}px;
    padding-left: ${(props) => props.theme.vars.xSpace}px;
  }
`;
