import styled from 'styled-components';
import { math, fluidRange } from 'polished';
import { down, up } from 'styled-breakpoints';

export const IndexStyles = styled.div`
  position: relative;
  padding-top: ${(props) => props.theme.vars.topLayoutPadding}px;

  ${up('desktop')} {
    display: flex;
    flex-wrap: wrap;
  }

  header.home-infos-not-desktop-header {
    &.print {
      margin-top: ${(props) => props.theme.vars.xlSpace}px;

      ${down('mobile')} {
        margin-top: ${(props) => props.theme.vars.lSpace}px;
      }
    }

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

  .desktop-projects,
  .mobile-projects {
    width: 60%;
    padding-left: ${(props) => props.theme.vars.xlSpace}px;

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

    ${down('tablet')} {
      margin-top: ${(props) => props.theme.vars.lSpace}px;
    }

    ${down('mobile')} {
      margin-top: ${(props) => props.theme.vars.mSpace}px;
    }

    ${down('tablet')} {
      width: 100%;
      padding-left: 0;
    }
  }

  .desktop-projects {
    .print-projects {
      margin-top: ${(props) => props.theme.vars.xxlSpace}px;
    }
  }
`;
