import styled from 'styled-components';
import { math, fluidRange } from 'polished';
import { down } from 'styled-breakpoints';

export const IndexStyles = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: ${(props) => props.theme.vars.topLayoutPadding}px;

  header.home-infos-not-desktop-header {
    h1,
    h2 {
      ${down('mobile')} {
        font-size: 30px;
        margin-bottom: ${(props) => props.theme.vars.sSpace}px;
      }
    }

    p {
      ${down('mobile')} {
        font-size: 16px;
        margin-bottom: ${(props) => props.theme.vars.sSpace}px;
      }
    }
  }

  ul {
    width: 60%;
    padding-left: ${(props) => props.theme.vars.xlSpace}px;

    ${down('tablet')} {
      width: 100%;
      padding-left: 0;
    }

    &:first-of-type {
      ${(props) =>
        fluidRange(
          {
            prop: 'margin-top',
            fromSize: math(`174px + ${props.theme.vars.xlSpace}px`),
            toSize: math(`248px + ${props.theme.vars.xlSpace}px`),
          },
          props.theme.breakpoints.desktop,
          props.theme.breakpoints.maxDesktop
        )}

      margin-bottom: 145px;

      ${down('tablet')} {
        margin: ${(props) => props.theme.vars.xlSpace}px 0;
      }

      ${down('mobile')} {
        margin-top: ${(props) => props.theme.vars.mSpace}px;
        margin-bottom: ${(props) => props.theme.vars.xlSpace}px;
      }
    }

    &:last-of-type {
      margin-left: ${(props) => props.theme.vars.homeInfosDesktopWidth};

      ${down('tablet')} {
        margin-left: 0;
        margin-top: ${(props) => props.theme.vars.xlSpace}px;
      }

      ${down('mobile')} {
        margin-top: ${(props) => props.theme.vars.mSpace}px;
      }
    }
  }
`;
