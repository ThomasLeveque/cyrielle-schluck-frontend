import styled from 'styled-components';

interface ItemImageStylesProps {
  grid?: number;
  size?: number;
}

export const ItemImageStyles = styled.li<ItemImageStylesProps>`
  width: ${(props) => (props.grid ? `calc(100% / ${props.grid})` : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${(props) => (props.size ? `${props.size}px` : '100%')};
    max-width: 100%;
  }
`;
