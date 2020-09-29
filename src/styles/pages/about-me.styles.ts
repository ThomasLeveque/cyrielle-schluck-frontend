import styled from 'styled-components';

export const AboutMeStyles = styled.div`
  img {
    width: 200px;
    margin-bottom: ${(props) => props.theme.vars.mSpace}px;
  }

  .about-me-desc ul {
    li {
      &:before {
        content: '- ';
      }
    }
  }
`;
