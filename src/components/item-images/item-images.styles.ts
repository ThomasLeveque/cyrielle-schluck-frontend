import styled from 'styled-components';

interface ItemImagesStylesProps {
  totalImages: number;
}

export const ItemImagesStyles = styled.ul<ItemImagesStylesProps>`
  justify-content: center;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &.next-button {
      right: -${(props) => props.theme.vars.sSpace - props.theme.vars.gridGap / 2}px;
    }

    &.prev-button {
      left: -${(props) => props.theme.vars.sSpace - props.theme.vars.gridGap / 2}px;
    }
  }
`;
