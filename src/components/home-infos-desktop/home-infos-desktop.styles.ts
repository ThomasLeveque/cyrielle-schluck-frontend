import { fluidRange } from 'polished';
import styled from 'styled-components';

interface HomeInfosDesktopStylesProps {}

export const HomeInfosDesktopStyles = styled.section<HomeInfosDesktopStylesProps>`
  position: sticky;
  width: ${(props) => props.theme.vars.homeInfosDesktopWidth};
  align-self: flex-start;
  top: ${(props) => props.theme.vars.lSpace}px;

  ${(props) =>
    fluidRange(
      {
        prop: 'top',
        fromSize: '80px',
        toSize: '50px',
      },
      props.theme.breakpoints.desktop,
      props.theme.breakpoints.maxDesktop
    )}

  h1 {
    transform-origin: bottom left;
    ${(props) =>
      fluidRange(
        {
          prop: 'font-size',
          fromSize: '70px',
          toSize: '100px',
        },
        props.theme.breakpoints.desktop,
        props.theme.breakpoints.maxDesktop
      )}

    div {
      white-space: nowrap;
    }
  }

  h2 {
    ${(props) =>
      fluidRange(
        {
          prop: 'font-size',
          fromSize: '42px',
          toSize: '60px',
        },
        props.theme.breakpoints.desktop,
        props.theme.breakpoints.maxDesktop
      )}
    ${(props) =>
      fluidRange(
        {
          prop: 'margin-top',
          fromSize: '-30px',
          toSize: '0px',
        },
        props.theme.breakpoints.desktop,
        props.theme.breakpoints.maxDesktop
      )}
  }
`;
