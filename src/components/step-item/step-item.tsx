import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import ItemImages from '@components/item-images/item-images';
import { StepItem as StepItemType } from '@interfaces/project.interface';
import { itemVariants } from '@animations/global.animation';

import { StepItemStyles } from './step-item.styles';
import { PStyles } from '@styles/texts/p.styles';

interface StepItemProps {
  stepItem: StepItemType;
}

const StepItem: React.FC<StepItemProps> = ({ stepItem }) => {
  const theme = useContext(ThemeContext);
  const stepItemAnimation = useAnimation();
  const { ref, inView } = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      stepItemAnimation.start('animate');
    }
  }, [stepItemAnimation, inView]);

  return (
    <StepItemStyles
      as={motion.article}
      ref={ref}
      animate={stepItemAnimation}
      initial="initial"
      variants={itemVariants}
      custom={40}
      className="row"
      grid={stepItem.grid}
    >
      {stepItem.title && (
        <motion.header className="step-item-header">
          <PStyles
            as="h5"
            fontSize={12}
            lineHeight={1.25}
            mb={theme.vars.xsSpace}
            color={theme.colors.myBlack}
          >
            {stepItem.title}
          </PStyles>
          <hr />
        </motion.header>
      )}
      <ItemImages itemImages={stepItem.itemImages} />
    </StepItemStyles>
  );
};

export default StepItem;
