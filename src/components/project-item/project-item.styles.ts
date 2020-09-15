import styled from 'styled-components';
import { rgba } from 'polished';
import { fixHexaColor } from '@utils/color.util';

interface ProjectItemStylesProps {
  bgColor: string;
}

export const ProjectItemStyles = styled.li<ProjectItemStylesProps>`
  background-color: ${(props) => fixHexaColor(props.bgColor)};
  height: 330px;
  width: 650px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  a {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;

    > div {
      padding-left: 40px;

      h4 {
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        font-weight: 700;
        color: ${(props) => rgba(props.theme.colors.black, 0.15)};
        margin-bottom: 10px;
      }

      h3 {
        font-size: 30px;
        line-height: 34px;
        font-family: ${(props) => props.theme.fonts.secondaryFont};
        color: ${(props) => props.theme.colors.myWhite};
        margin-bottom: 20px;
      }
    }

    img {
      width: 400px;
      margin-right: -10%;
    }
  }
`;
