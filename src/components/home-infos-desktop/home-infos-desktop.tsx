import React, { useContext, useEffect } from 'react';
import { motion, transform, useTransform, useViewportScroll } from 'framer-motion';
import { ThemeContext } from 'styled-components';

import { itemVariants, stagger } from '@animations/global.animation';
import CustomButton from '@components/custom-button/custom-button';

import { HomeInfosDesktopStyles } from './home-infos-desktop.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';
import { PStyles } from '@styles/texts/p.styles';

interface HomeInfosDesktopProps {
  gotoAboutMe: () => void;
}

const HomeInfosDesktop: React.FC<HomeInfosDesktopProps> = ({ gotoAboutMe }) => {
  const theme = useContext(ThemeContext);

  const minScrollY = 100;
  const maxScrollY = 280;
  const maxScaleH1 = 0.6;
  const maxYH1 = -100;
  const maxYDesc = maxYH1 - theme.vars.xlSpace + theme.vars.lSpace;

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
            <span className="color-gray">Cyrielle</span>,
          </motion.div>
          <motion.div variants={itemVariants}>
            Designer UI<span className="color-gray">/</span>UX
            <span className="color-gray">.</span>
          </motion.div>
        </HeadingStyles>
        <motion.div style={{ y: yDesc }}>
          <PStyles as={motion.p} variants={itemVariants} letterSpacing={1} mb={theme.vars.xlSpace}>
            Designer UI & UX avec plus de 3 ans d’expérience, je mets l’utilisateur au centre de mon
            travail ergonomique et graphique afin de lui assurer la meilleure expérience possible.
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
