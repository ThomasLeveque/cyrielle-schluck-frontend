import React from 'react';

import { ItemImage as ItemImageType } from '@interfaces/project.interface';
import MyImage from '@components/my-image/my-image';
import { fixImgUrl } from '@utils/env-url.util';

import { ItemImageStyles } from './item-image.styles';

interface ItemImageProps {
  itemImage: ItemImageType;
  itemsLength: number;
}

const ItemImage: React.FC<ItemImageProps> = ({ itemImage, itemsLength }) => {
  const itemImageUrl = fixImgUrl(itemImage.image?.url);

  return (
    <ItemImageStyles
      className="row"
      mobileGrid={itemImage.mobileGrid}
      tabletGrid={itemImage.tabletGrid}
      grid={itemImage.grid}
      size={itemImage.size}
      itemsLength={itemsLength}
      topSpace={itemImage.topSpace}
      mobileTopSpace={itemImage.mobileTopSpace}
      customGridSize={itemImage.customGridSize}
    >
      <MyImage
        width={itemImage.image?.width}
        height={itemImage.image?.height}
        src={itemImageUrl}
        alt={itemImage.image?.alternativeText}
      />
    </ItemImageStyles>
  );
};

export default ItemImage;
