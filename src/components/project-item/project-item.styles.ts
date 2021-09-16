import styled from 'styled-components';
import { down, only } from 'styled-breakpoints';

import { fixHexaColor } from '@utils/color.util';

interface ProjectItemStylesProps {
  bgColor: string;
}

export const ProjectItemStyles = styled.li<ProjectItemStylesProps>`
  background-color: ${(props) => fixHexaColor(props.bgColor)};
  height: 330px;
  width: 100%;

  ${down('mobile')} {
    height: 180px;
  }

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.vars.sSpace}px;
  }

  a {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover,
    &:focus {
      .img {
        transform: translateX(-20px);
      }
    }

    .data {
      padding: 0 60px 0 ${(props) => props.theme.vars.mSpace}px;
      min-width: 350px;

      ${only('desktop')} {
        min-width: 300px;
      }

      ${down('mobile')} {
        min-width: auto;
        padding: 0 ${(props) => props.theme.vars.xsSpace}px;
      }

      h4 {
        white-space: nowrap;

        ${down('mobile')} {
          font-size: 14px;
          margin-bottom: 5px;
        }
      }

      h3,
      .mobile-name {
        ${down('mobile')} {
          font-size: 22px;
          margin-bottom: 0;
          white-space: nowrap;
        }
      }
    }

    .img {
      min-width: 400px;
      margin-right: ${(props) => props.theme.vars.mSpace}px;
      transition: 0.3s ease-out;

      ${only('desktop')} {
        min-width: 350px;
      }

      ${down('mobile')} {
        min-width: 200px;
      }
    }
  }
`;
