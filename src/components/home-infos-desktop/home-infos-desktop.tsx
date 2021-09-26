import React, { useContext, useEffect } from 'react';
import { AnimatePresence, motion, transform, useTransform, useViewportScroll } from 'framer-motion';
import { ThemeContext } from 'styled-components';
import { IntersectionObserverEntryV2 } from 'react-cool-inview';

import { itemVariants, stagger } from '@animations/global.animation';
import CustomButton from '@components/custom-button/custom-button';

import { HomeInfosDesktopStyles } from './home-infos-desktop.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';
import { PStyles } from '@styles/texts/p.styles';
import { Home } from '@interfaces/home.interface';

interface HomeInfosDesktopProps {
  gotoAboutMe: () => void;
  home: Home;
  printProjectsInView: boolean;
  printProjectsEntry: IntersectionObserverEntryV2 | undefined;
}

const infosExit = { opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } };

export const maxScaleH1 = 0.56;

const HomeInfosDesktop: React.FC<HomeInfosDesktopProps> = ({
  gotoAboutMe,
  home,
  printProjectsInView,
  printProjectsEntry,
}) => {
  const theme = useContext(ThemeContext);

  const minScrollY = 100;
  const maxScrollY = 280;
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
      {printProjectsEntry && (
        <AnimatePresence exitBeforeEnter>
          {printProjectsInView ? (
            <motion.div
              key="printInfos"
              className="print-infos"
              animate="animate"
              initial="initial"
              exit={infosExit}
              variants={stagger}
            >
              <HeadingStyles as={motion.h1} variants={itemVariants}>
                {home.printTitle}
              </HeadingStyles>
              <PStyles
                as={motion.p}
                variants={itemVariants}
                letterSpacing={1}
                mb={theme.vars.lSpace}
              >
                {home.printDesc}
              </PStyles>
              <motion.div variants={itemVariants}>
                <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="mainInfos"
              className="main-infos"
              animate="animate"
              initial="initial"
              exit={infosExit}
              variants={stagger}
            >
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
                <PStyles
                  as={motion.p}
                  variants={itemVariants}
                  letterSpacing={1}
                  mb={theme.vars.lSpace}
                >
                  {home.desc}
                </PStyles>
                <motion.div variants={itemVariants}>
                  <CustomButton text="En savoir plus" onClick={gotoAboutMe} />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </HomeInfosDesktopStyles>
  );
};

export default HomeInfosDesktop;
