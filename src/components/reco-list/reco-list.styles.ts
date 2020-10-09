import { rgba } from 'polished';
import styled from 'styled-components';

const borderSize = 90;

interface RecoListStylesProps {}

export const RecoListStyles = styled.ul<RecoListStylesProps>`
  margin-top: ${(props) => props.theme.vars.xlSpace}px;
  padding: 20px;
  text-align: center;
  position: relative;

  .border {
    background-color: ${(props) => props.theme.colors.mainColor};
    position: absolute;
    &-top {
      height: 2px;
      top: 0;
      left: 0;
      width: ${borderSize}px;
    }

    &-left {
      width: 2px;
      left: 0;
      height: ${borderSize}px;
      top: 0;
    }

    &-bottom {
      height: 2px;
      bottom: 0;
      right: 0;
      width: ${borderSize}px;
    }

    &-right {
      width: 2px;
      right: 0;
      bottom: 0;
      height: ${borderSize}px;
    }
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.mainFont};
    text-transform: uppercase;
    color: ${(props) => rgba(props.theme.colors.black, 0.15)};
  }
`;

RecoListStyles.defaultProps = {};
