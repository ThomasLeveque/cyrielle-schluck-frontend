import React from 'react';

import { ItemImage as ItemImageType } from '@interfaces/project.interface';

import { ItemImageStyles } from './item-image.styles';

interface ItemImageProps {
  itemImage: ItemImageType;
  itemsLength: number;
}

const ItemImage: React.FC<ItemImageProps> = ({ itemImage, itemsLength }) => {
  return (
    <ItemImageStyles
      className="row"
      mobileGrid={itemImage.mobileGrid}
      tabletGrid={itemImage.tabletGrid}
      grid={itemImage.grid}
      size={itemImage.size}
      itemsLength={itemsLength}
    >
      <img src={`${process.env.NEXT_PUBLIC_API_URL}${itemImage.image.url}`} />
    </ItemImageStyles>
  );
};

export default ItemImage;
