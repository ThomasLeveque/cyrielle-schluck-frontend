import { down, only, up } from 'styled-breakpoints';
import styled from 'styled-components';

interface ItemImageStylesProps {
  grid?: number;
  mobileGrid?: number;
  tabletGrid?: number;
  size?: number;
  itemsLength?: number;
}

export const ItemImageStyles = styled.li<ItemImageStylesProps>`
  width: ${(props) => (props.grid ? `calc(100% / ${props.grid})` : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;

  ${only('tablet')} {
    width: ${(props) =>
      props.tabletGrid
        ? `calc(100% / ${props.tabletGrid})`
        : props.grid
        ? `calc(100% / ${props.grid})`
        : 'auto'};
  }

  ${up('tablet')} {
    max-width: ${(props) =>
      props.size && !props.grid ? `calc(100% / ${props.itemsLength})` : 'none'};
  }

  ${down('mobile')} {
    width: ${(props) => (props.mobileGrid ? `calc(100% / ${props.mobileGrid})` : '100%')};
  }

  img {
    width: ${(props) => (props.size ? `${props.size}px` : '100%')};
    max-width: 100%;

    ${down('mobile')} {
      width: 100%;
    }
  }
`;
