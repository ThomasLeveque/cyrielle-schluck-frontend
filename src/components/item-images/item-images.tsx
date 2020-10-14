import React from 'react';

import ItemImage from '@components/item-image/item-image';
import { ItemImage as ItemImageType } from '@interfaces/project.interface';

import { ItemImagesStyles } from './item-images.styles';

interface ItemImagesProps {
  itemImages: ItemImageType[];
}

const ItemImages: React.FC<ItemImagesProps> = ({ itemImages }) => {
  return (
    <ItemImagesStyles className="container">
      {itemImages.map((itemImage: ItemImageType) => (
        <ItemImage key={itemImage.id} itemImage={itemImage} />
      ))}
    </ItemImagesStyles>
  );
};

export default ItemImages;
