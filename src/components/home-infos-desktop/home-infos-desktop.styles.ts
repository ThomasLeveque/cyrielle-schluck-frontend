import { fluidRange } from 'polished';
import styled from 'styled-components';
import { maxScaleH1 } from './home-infos-desktop';

const fromH1Size = 70;
const toH1Size = 100;

export const HomeInfosDesktopStyles = styled.section`
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

  .main-infos {
    h1 {
      transform-origin: bottom left;
      ${(props) =>
        fluidRange(
          {
            prop: 'font-size',
            fromSize: `${fromH1Size}px`,
            toSize: `${toH1Size}px`,
          },
          props.theme.breakpoints.desktop,
          props.theme.breakpoints.maxDesktop
        )}

      div {
        white-space: nowrap;
      }
    }
  }

  .print-infos {
    h1 {
      margin-bottom: ${(props) => props.theme.vars.xlSpace * maxScaleH1}px;
      ${(props) =>
        fluidRange(
          {
            prop: 'font-size',
            fromSize: `${fromH1Size * maxScaleH1}px`,
            toSize: `${toH1Size * maxScaleH1}px`,
          },
          props.theme.breakpoints.desktop,
          props.theme.breakpoints.maxDesktop
        )}
    }
  }
`;
