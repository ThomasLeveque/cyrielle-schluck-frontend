import React, { useState, useEffect, useContext, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const letterStagger = 0.03;
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const reco: Reco | null = useMemo(() => (inView ? recos[activeRecoIndex] : null), [
    activeRecoIndex,
    inView,
  ]);

  const getNextRecoIndex = (prevIndex: number): number => {
    if (prevIndex === recos.length - 1) {
      return 0;
    }
    return prevIndex + 1;
  };

  const getIntervalTime = (): number => {
    return letterStagger * 1000 * recos[activeRecoIndex].text.length + 5000;
  };

  useEffect(() => {
    if (!inView) {
      return;
    }
    const intervalTime = getIntervalTime();
    const interval = setInterval(() => {
      setActiveRecoIndex(getNextRecoIndex);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [getIntervalTime, inView]);

  return (
    <RecoListStyles as={motion.section} ref={ref} initial="initial" variants={itemVariants}>
      <div className="border border-top"></div>
      <div className="border border-left"></div>
      <div className="border border-bottom"></div>
      <div className="border border-right"></div>
      <HeadingStyles
        as="h2"
        fontSize={28}
        lineHeight={1.2}
        mb={theme.vars.sSpace}
        color={rgba(theme.colors.black, 0.15)}
        fontFamily={theme.fonts.mainFont}
        isUppercase
      >
        ce qu’on dit de moi
      </HeadingStyles>
      <AnimatePresence exitBeforeEnter>
        {reco && <RecoItem letterStagger={letterStagger} reco={reco} key={activeRecoIndex} />}
      </AnimatePresence>
    </RecoListStyles>
  );
};

export default RecoList;
