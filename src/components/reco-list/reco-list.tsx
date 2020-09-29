import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import RecoItem from '@components/reco-item/reco-item';
import { Reco } from '@interfaces/about-me.interface';

import { RecoListStyles } from './reco-list.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';

interface RecoListProps {
  recos: Reco[];
}

const RecoList = React.forwardRef<HTMLUListElement, RecoListProps>(({ recos }, ref) => {
  const [activeRecoIndex, setActiveRecoIndex] = useState<number>(0);
  const reco: Reco = recos[activeRecoIndex];
  const letterStagger = 0.05;

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
    const intervalTime = getIntervalTime();
    const interval = setInterval(() => {
      setActiveRecoIndex(getNextRecoIndex);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [getIntervalTime]);

  return (
    <RecoListStyles ref={ref}>
      <div className="border border-top"></div>
      <div className="border border-left"></div>
      <div className="border border-bottom"></div>
      <div className="border border-right"></div>
      <HeadingStyles as="h2" fontSize={28} lineHeight={34} mb={30}>
        ce qu’on dit de moi
      </HeadingStyles>
      <AnimatePresence exitBeforeEnter>
        <RecoItem letterStagger={letterStagger} reco={reco} key={`${reco.text}-${reco.id}`} />
      </AnimatePresence>
    </RecoListStyles>
  );
});

export default RecoList;
