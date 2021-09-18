import React, { useContext, useEffect } from 'react';
import { motion, transform, useTransform, useViewportScroll } from 'framer-motion';
import { ThemeContext } from 'styled-components';

import { itemVariants, stagger } from '@animations/global.animation';
import CustomButton from '@components/custom-button/custom-button';

import { HomeInfosDesktopStyles } from './home-infos-desktop.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';
import { PStyles } from '@styles/texts/p.styles';
import { Home } from '@interfaces/home.interface';

interface HomeInfosDesktopProps {
  gotoAboutMe: () => void;
  home: Home;
}

const HomeInfosDesktop: React.FC<HomeInfosDesktopProps> = ({ gotoAboutMe, home }) => {
  const theme = useContext(ThemeContext);

  const minScrollY = 100;
  const maxScrollY = 280;
  const maxScaleH1 = 0.56;
  const maxYH1 = -100;
  const maxYDesc = maxYH1 - theme.vars.xlSpace + theme.vars.lSpace;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleInitialStyle(), []);

  const { scrollY } = useViewportScroll();
  const scaleH1 = useTransform(scrollY, [minScrollY, maxScrollY], [1, maxScaleH1]);
  const yH1 = useTransform(scrollY, [minScrollY, maxScrollY], [0, maxYH1]);
  const yDesc = useTransform(scrollY, [minScrollY, maxScrollY], [0, maxYDesc]);

  const handleInitialStyle = (): void => {
    const initialScaleH1 = transform(window.scrollY, [minScrollY, maxScrollY], [1, maxScaleH1]);
    const initialyH1 = transform(window.scrollY, [minScrollY, maxScrollY], [0, maxYH1]);
    const initialyDesc = transform(window.scrollY, [minScrollY, maxScrollY], [0, maxYDesc]);
    scaleH1.set(initialScaleH1);
    yH1.set(initialyH1);
    yDesc.set(initialyDesc);
  };

  return (
    <HomeInfosDesktopStyles>
      <motion.div key="mainInfos" animate="animate" initial="initial" variants={stagger}>
        <HeadingStyles as={motion.h1} style={{ scale: scaleH1, y: yH1 }}>
          <motion.div variants={itemVariants}>
            <span className="color-gray">{home.name}</span>,
          </motion.div>
          <motion.div variants={itemVariants}>
            {home.title}
            <span className="color-gray">.</span>
          </motion.div>
        </HeadingStyles>
        <motion.div style={{ y: yDesc }}>
          <PStyles as={motion.p} variants={itemVariants} letterSpacing={1} mb={theme.vars.xlSpace}>
            {home.desc}
          </PStyles>
          <motion.div variants={itemVariants}>
            <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
          </motion.div>
        </motion.div>
      </motion.div>
    </HomeInfosDesktopStyles>
  );
};

export default HomeInfosDesktop;
