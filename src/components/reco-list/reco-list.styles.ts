import { down } from 'styled-breakpoints';
import styled from 'styled-components';

interface RecoListStylesProps {}

export const RecoListStyles = styled.section<RecoListStylesProps>`
  margin-top: ${(props) => props.theme.vars.xlSpace}px;
  padding: ${(props) => props.theme.vars.xsSpace}px;
  text-align: center;
  position: relative;

  ${down('mobile')} {
    margin-top: ${(props) => props.theme.vars.lSpace}px;
    padding-top: ${(props) => props.theme.vars.lSpace}px;
    padding-bottom: ${(props) => props.theme.vars.lSpace}px;
  }

  h2 {
    ${down('mobile')} {
      font-size: 18px;
    }
  }

  .border {
    background-color: ${(props) => props.theme.colors.mainColor};
    position: absolute;

    &-top {
      height: 2px;
      top: 0;
      left: 0;
      width: ${(props) => props.theme.vars.xlSpace}px;

      ${down('mobile')} {
        width: ${(props) => props.theme.vars.lSpace}px;
      }
    }

    &-left {
      width: 2px;
      left: 0;
      top: 0;
      height: ${(props) => props.theme.vars.xlSpace}px;

      ${down('mobile')} {
        height: ${(props) => props.theme.vars.lSpace}px;
      }
    }

    &-bottom {
      height: 2px;
      bottom: 0;
      right: 0;
      width: ${(props) => props.theme.vars.xlSpace}px;

      ${down('mobile')} {
        width: ${(props) => props.theme.vars.lSpace}px;
      }
    }

    &-right {
      width: 2px;
      right: 0;
      bottom: 0;
      height: ${(props) => props.theme.vars.xlSpace}px;

      ${down('mobile')} {
        height: ${(props) => props.theme.vars.lSpace}px;
      }
    }
  }
`;

RecoListStyles.defaultProps = {};
