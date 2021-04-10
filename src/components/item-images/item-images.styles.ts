import styled from 'styled-components';

interface ItemImagesStylesProps {
  totalSwipableImages?: number;
  aditionnalSvgTop?: number;
  aditionnalMobileSvgTop?: number;
}

export const ItemImagesStyles = styled.ul<ItemImagesStylesProps>`
  justify-content: center;
  position: relative;

  div.swipable-container {
    margin: ${(props) => props.theme.vars.gridGap}px 0;
    position: relative;

    svg {
      position: absolute;
      top: ${(props) =>
        `calc(50% + ${
          props.aditionnalMobileSvgTop ? props.aditionnalMobileSvgTop : props.aditionnalSvgTop
        }px)`};
      transform: translateY(-50%);
      cursor: pointer;
      transition: opacity 0.4s ease-out;
      z-index: 100;

      &[disabled] {
        opacity: 0;
        pointer-events: none;
      }

      &.next-button {
        right: -${(props) => props.theme.vars.sSpace}px;
      }

      &.prev-button {
        left: -${(props) => props.theme.vars.sSpace}px;
      }
    }

    div.swipable-row {
      overflow: hidden;
      margin-left: -${(props) => props.theme.vars.sSpace}px;
      margin-right: -${(props) => props.theme.vars.sSpace}px;

      ul {
        width: calc(100vw * ${(props) => props.totalSwipableImages});
        padding: 0 ${(props) => props.theme.vars.sSpace}px;
        margin: 0;

        li {
          width: calc(100vw - ${(props) => props.theme.vars.sSpace * 2}px);
          padding: 0;
          margin-right: ${(props) => props.theme.vars.sSpace}px;

          .img > * {
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
