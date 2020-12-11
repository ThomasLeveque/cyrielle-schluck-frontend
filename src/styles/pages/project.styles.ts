import styled from 'styled-components';

import { fixHexaColor } from '@utils/color.util';
import { down, only } from 'styled-breakpoints';

interface ProjectStylesProps {
  bgColor: string;
}

export const ProjectStyles = styled.div<ProjectStylesProps>`
  header.page-header {
    position: relative;
    padding-top: ${(props) => props.theme.vars.topLayoutPadding}px;
    margin-bottom: ${(props) => props.theme.vars.xxlSpace}px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      bottom: ${(props) => props.theme.vars.xlSpace}px;
      width: 100vw;
      display: block;
      background-color: ${(props) => fixHexaColor(props.bgColor)};
    }

    .header-texts {
      display: flex;
      margin-bottom: ${(props) => props.theme.vars.xlSpace}px;

      ${down('tablet')} {
        flex-direction: column;
        margin-bottom: ${(props) => props.theme.vars.lSpace}px;
      }

      ${down('mobile')} {
        margin-bottom: ${(props) => props.theme.vars.mSpace}px;
      }

      &-headings {
        margin-right: ${(props) => props.theme.vars.lSpace}px;
        white-space: nowrap;

        ${down('tablet')} {
          margin-right: 0;
          margin-bottom: ${(props) => props.theme.vars.mSpace}px;
          white-space: normal;
        }

        ${down('mobile')} {
          margin-bottom: ${(props) => props.theme.vars.xsSpace}px;
        }

        h2 {
          ${down('tablet')} {
            margin-bottom: 15px;
          }

          ${down('mobile')} {
            margin-bottom: 10px;
            font-size: 18px;
          }
        }

        h1 {
          ${only('tablet')} {
            font-size: 60px;
          }
        }
      }

      p {
        ${down('mobile')} {
          font-size: 14px;
          line-height: 2;
        }
      }
    }

    .img {
      width: 800px;
      max-width: 100%;
      margin: 0 auto;
    }
  }
`;
