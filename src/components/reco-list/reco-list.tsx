import React, { useState, useEffect, useContext } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { ThemeContext } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { rgba } from 'polished';

import RecoItem from '@components/reco-item/reco-item';
import { Reco } from '@interfaces/about-me.interface';
import { itemVariants } from '@animations/global.animation';

import { RecoListStyles } from './reco-list.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';

interface RecoListProps {
  recos: Reco[];
}

const RecoList: React.FC<RecoListProps> = ({ recos }) => {
  const theme = useContext(ThemeContext);
  const [activeRecoIndex, setActiveRecoIndex] = useState<number>(0);
  const reco: Reco = recos[activeRecoIndex];
  const letterStagger = 0.05;
  const recoListAnimation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const getNextRecoIndex = (prevIndex: number): number => {
    if (prevIndex === recos.length - 1) {
      return 0;
    }
    return prevIndex + 1;
  };

  const getIntervalTime = (): number => {
    return letterStagger * 1000 * recos[activeRecoIndex].text.length + 3000;
  };

  useEffect(() => {
    if (inView) {
      recoListAnimation.start('animate');
    }
  }, [recoListAnimation, inView]);

  useEffect(() => {
    const intervalTime = getIntervalTime();
    const interval = setInterval(() => {
      setActiveRecoIndex(getNextRecoIndex);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [getIntervalTime]);

  return (
    <RecoListStyles
      as={motion.section}
      ref={ref}
      initial="initial"
      animate={recoListAnimation}
      variants={itemVariants}
    >
      <div className="border border-top"></div>
      <div className="border border-left"></div>
      <div className="border border-bottom"></div>
      <div className="border border-right"></div>
      <HeadingStyles
        as="h2"
        fontSize={28}
        lineHeight={34}
        mb={theme.vars.xSpace}
        color={rgba(theme.colors.black, 0.15)}
        fontFamily={theme.fonts.mainFont}
        isUppercase
      >
        ce qu’on dit de moi
      </HeadingStyles>
      <AnimatePresence exitBeforeEnter>
        <RecoItem letterStagger={letterStagger} reco={reco} key={`${reco.text}-${reco.id}`} />
      </AnimatePresence>
    </RecoListStyles>
  );
};

export default RecoList;
