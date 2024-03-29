import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

interface CustomButtonStylesProps {
  width: number;
}

const buttonTransition = css`
  transition: 0.4s cubic-bezier(0, 0.05, 0.25, 0.95);
`;

export const CustomButtonStyles = styled.button<CustomButtonStylesProps>`
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;
  width: ${(props) => props.width}px;
  min-width: 200px;
  height: 54px;
  position: relative;
  max-width: 100%;

  ${up('desktop')} {
    &:hover,
    &:focus {
      .text {
        transform: translateX(-100%);

        span {
          transform: translateX(100%);
        }
      }

      .sub-text {
        transform: translate(0, -50%);
      }
    }
  }

  .text {
    font-size: 14px;
    height: 100%;
    width: 100%;
    color: ${(props) => props.theme.colors.myWhite};
    background-color: ${(props) => props.theme.colors.myBlack};
    ${buttonTransition}
    overflow: hidden;

    span {
      display: flex;
      padding-left: 25px;
      align-items: center;
      width: inherit;
      height: inherit;
      ${buttonTransition}
    }
  }

  .sub-text {
    font-size: 30px;
    font-weight: 900;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.myBlack};
    position: absolute;
    top: 50%;
    transform: translate(-100%, -50%);
    left: 0;
    z-index: -1;
    ${buttonTransition}
  }
`;
