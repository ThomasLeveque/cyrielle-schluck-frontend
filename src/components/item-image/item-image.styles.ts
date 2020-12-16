import { down, only, up } from 'styled-breakpoints';
import styled from 'styled-components';

interface ItemImageStylesProps {
  grid?: number;
  mobileGrid?: number;
  tabletGrid?: number;
  size?: number;
  itemsLength?: number;
  topSpace: number;
  mobileTopSpace: number;
  customGridSize: number;
}

export const ItemImageStyles = styled.li<ItemImageStylesProps>`
  width: ${(props) =>
    props.grid
      ? `calc(100% * ${props.grid} / ${
          props.customGridSize ? props.customGridSize : props.theme.vars.gridSize
        })`
      : 'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.topSpace ? props.topSpace : 0)}px;

  ${only('tablet')} {
    width: ${(props) =>
      props.tabletGrid
        ? `calc(100% * ${props.tabletGrid} / ${props.theme.vars.gridSize})`
        : props.grid
        ? `calc(100% * ${props.grid} / ${
            props.customGridSize ? props.customGridSize : props.theme.vars.gridSize
          })`
        : 'auto'};
  }

  ${up('tablet')} {
    max-width: ${(props) =>
      props.size && !props.grid ? `calc(100% / ${props.itemsLength})` : 'none'};
  }

  ${down('mobile')} {
    width: ${(props) =>
      props.mobileGrid
        ? `calc(100% * ${props.mobileGrid} / ${props.theme.vars.gridSize})`
        : '100%'};
    margin-top: ${(props) =>
      props.mobileTopSpace !== null ? props.mobileTopSpace : props.topSpace ? props.topSpace : 0}px;
  }

  .img {
    width: ${(props) => (props.size ? `${props.size}px` : '100%')};
    max-width: 100%;

    ${down('mobile')} {
      width: 100%;
    }
  }
`;
