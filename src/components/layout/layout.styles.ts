import styled from 'styled-components';
import { down, between } from 'styled-breakpoints';

export const LayoutStyles = styled.main`
  max-width: 100%;
  width: ${(props) => props.theme.vars.appMaxWidth}px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.vars.xlSpace}px;

  ${between('tablet', 'desktop')} {
    padding-right: ${(props) => props.theme.vars.lSpace}px;
    padding-left: ${(props) => props.theme.vars.lSpace}px;
  }

  ${down('mobile')} {
    padding-right: ${(props) => props.theme.vars.sSpace}px;
    padding-left: ${(props) => props.theme.vars.sSpace}px;
  }
`;
