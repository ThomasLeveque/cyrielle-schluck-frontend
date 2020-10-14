import React from 'react';

import { ItemImage as ItemImageType } from '@interfaces/project.interface';

import { ItemImageStyles } from './item-image.styles';

interface ItemImageProps {
  itemImage: ItemImageType;
}

const ItemImage: React.FC<ItemImageProps> = ({ itemImage }) => {
  return (
    <ItemImageStyles className="row" grid={itemImage.grid} size={itemImage.size}>
      <img src={`${process.env.NEXT_PUBLIC_API_URL}${itemImage.image.url}`} />
    </ItemImageStyles>
  );
};

export default ItemImage;
