import styled from 'styled-components';

const infosWidth = '40%';

export const IndexStyles = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .infos {
    position: sticky;
    width: ${infosWidth};
    align-self: flex-start;
    top: ${(props) => props.theme.vars.mSpace}px;

    h1 {
      transform-origin: bottom left;

      div {
        white-space: nowrap;
      }
    }
  }

  ul {
    width: 60%;
    padding-left: ${(props) => props.theme.vars.lSpace}px;

    &:first-of-type {
      margin-top: ${(props) => `calc(248px + ${props.theme.vars.lSpace}px)`};
      margin-bottom: 145px;
    }

    &:last-of-type {
      margin-left: ${infosWidth};
    }
  }
`;
