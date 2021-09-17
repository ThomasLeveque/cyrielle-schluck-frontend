import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from 'styled-components';
import useInView from 'react-cool-inview';
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
  const { observe, inView } = useInView({
    threshold: 0.6,
    unobserveOnEnter: true,
  });
  console.log(inView);
  const reco: Reco | null = useMemo(() => (inView ? recos[activeRecoIndex] : null), [activeRecoIndex, inView, recos]);

  const getNextRecoIndex = useCallback(
    (prevIndex: number): number => {
      if (prevIndex === recos.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    },
    [recos]
  );

  useEffect(() => {
    if (!inView) {
      return;
    }

    const intervalTime = letterStagger * 1000 * recos[activeRecoIndex].text.length + 5000;

    const updateActiveReco = () => {
      setActiveRecoIndex(getNextRecoIndex);
    };

    const removeTimeout = setTimeout(() => requestAnimationFrame(updateActiveReco), intervalTime);
    return () => clearTimeout(removeTimeout);
  }, [activeRecoIndex, recos, inView, getNextRecoIndex]);

  return (
    <RecoListStyles as={motion.section} ref={observe} initial="initial" animate="animate" variants={itemVariants}>
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
