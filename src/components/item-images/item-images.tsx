import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { ThemeContext } from 'styled-components';

import ItemImage from '@components/item-image/item-image';
import Mobile from '@components/responsive/mobile';
import NotMobile from '@components/responsive/not-mobile';
import { ItemImage as ItemImageType } from '@interfaces/project.interface';
import { transition } from '@animations/global.animation';

import NextButton from '@components/icons/next-button';
import PrevButton from '@components/icons/previous-button';

import { ItemImagesStyles } from './item-images.styles';

interface ItemImagesProps {
  itemImages: ItemImageType[];
}

const ItemImages: React.FC<ItemImagesProps> = ({ itemImages }) => {
  const [position, setPosition] = useState<number>(0);
  const theme = useContext(ThemeContext);
  const handlers = useSwipeable({
    onSwiped: (event) => {
      if (event.dir === 'Left') {
        nextPosition();
      } else if (event.dir === 'Right') {
        prevPosition();
      }
    },
  });

  const swipableImages: ItemImageType[] = itemImages.filter((itemImage: ItemImageType) => itemImage.isSwipable);

  const beforeSwipableImage: ItemImageType[] = itemImages.slice(0, itemImages.indexOf(swipableImages[0]));

  const afterSwipableImage: ItemImageType[] = itemImages.slice(itemImages.indexOf(swipableImages[swipableImages.length - 1]) + 1);

  const nextPosition = () => {
    if (position === swipableImages.length - 1) {
      return;
    }

    setPosition((prevPosition: number) => prevPosition + 1);
  };

  const prevPosition = () => {
    if (position === 0) {
      return;
    }

    setPosition((prevPosition: number) => prevPosition - 1);
  };

  return (
    <>
      <NotMobile>
        <ItemImagesStyles className="container">
          {itemImages.map((itemImage: ItemImageType) => (
            <ItemImage itemsLength={itemImages.length} key={itemImage.id} itemImage={itemImage} />
          ))}
        </ItemImagesStyles>
      </NotMobile>
      <Mobile>
        {swipableImages.length === 0 ? (
          <ItemImagesStyles className="container">
            {itemImages.map((itemImage: ItemImageType) => (
              <ItemImage itemsLength={itemImages.length} key={itemImage.id} itemImage={itemImage} />
            ))}
          </ItemImagesStyles>
        ) : (
          <ItemImagesStyles
            as="div"
            totalSwipableImages={swipableImages.length}
            aditionnalSvgTop={swipableImages[0].topSpace / 2}
            aditionnalMobileSvgTop={swipableImages[0].mobileTopSpace / 2}
          >
            <ul className="container">
              {beforeSwipableImage.map((itemImage: ItemImageType) => (
                <ItemImage itemsLength={itemImages.length} key={itemImage.id} itemImage={itemImage} />
              ))}
            </ul>
            <div className="swipable-container">
              <PrevButton className="prev-button" aria-hidden={position === 0} onClick={prevPosition} />
              <div {...handlers} className="swipable-row">
                <motion.ul
                  className="container"
                  animate={{
                    x: `calc(-${position * 100}vw + ${position * theme.vars.sSpace}px)`,
                  }}
                  transition={transition}
                >
                  {swipableImages.map((itemImage: ItemImageType) => (
                    <ItemImage itemsLength={itemImages.length} key={itemImage.id} itemImage={itemImage} />
                  ))}
                </motion.ul>
              </div>
              <NextButton className="next-button" aria-hidden={position === swipableImages.length - 1} onClick={nextPosition} />
            </div>
            <ul className="container">
              {afterSwipableImage.map((itemImage: ItemImageType) => (
                <ItemImage itemsLength={itemImages.length} key={itemImage.id} itemImage={itemImage} />
              ))}
            </ul>
          </ItemImagesStyles>
        )}
      </Mobile>
    </>
  );
};

export default ItemImages;
