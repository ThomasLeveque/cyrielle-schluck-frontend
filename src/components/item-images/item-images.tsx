import React from 'react';

import ItemImage from '@components/item-image/item-image';
import { ItemImage as ItemImageType } from '@interfaces/project.interface';
import NextButton from '../../../public/static/next.svg';
import PrevButton from '../../../public/static/previous.svg';
import Mobile from '@components/responsive/mobile';

import { ItemImagesStyles } from './item-images.styles';

interface ItemImagesProps {
  itemImages: ItemImageType[];
}

const ItemImages: React.FC<ItemImagesProps> = ({ itemImages }) => {
  return (
    <ItemImagesStyles className="container" totalImages={itemImages.length}>
      <Mobile>
        <PrevButton className="prev-button" />
      </Mobile>
      {itemImages.map((itemImage: ItemImageType) => (
        <ItemImage itemsLength={itemImages.length} key={itemImage.id} itemImage={itemImage} />
      ))}
      <Mobile>
        <NextButton className="next-button" />
      </Mobile>
    </ItemImagesStyles>
  );
};

export default ItemImages;
