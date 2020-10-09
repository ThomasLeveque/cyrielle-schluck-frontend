import styled from 'styled-components';

export const AboutMeStyles = styled.div`
  padding-top: ${(props) => props.theme.vars.topLayoutPadding}px;

  img {
    width: 200px;
    margin-bottom: ${(props) => props.theme.vars.lSpace}px;
  }
`;
