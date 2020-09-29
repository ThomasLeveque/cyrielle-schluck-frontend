import React from 'react';
import { motion } from 'framer-motion';

import { Reco } from '@interfaces/about-me.interface';

import { RecoItemStyles } from './reco-item.styles';
import { HeadingStyles } from '@styles/texts/heading.styles';
import { PStyles } from '@styles/texts/p.styles';
import { itemVariants, letterVariants, stagger, transition } from '@animations/global.animation';

interface RecoItemProps {
  reco: Reco;
  letterStagger: number;
}

const RecoItem: React.FC<RecoItemProps> = ({ reco, letterStagger }) => {
  const handleSourceClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault();
    if (!reco.sourceUrl) {
      return;
    }
    window.open(reco.sourceUrl, '_blank');
  };

  const recoTextArray = Array.from(reco.text);

  return (
    <RecoItemStyles
      as={motion.li}
      exit={{ opacity: 0, transition }}
      animate="animate"
      initial="initial"
      asUrl={!!reco.sourceUrl}
    >
      <HeadingStyles
        as={motion.h3}
        variants={stagger}
        custom={letterStagger}
        fontSize={28}
        lineHeight={40}
        mb={30}
      >
        <motion.span variants={letterVariants} className="quote color-gray">
          «
        </motion.span>
        {recoTextArray.map((recoTextLetter: string, index: number) => (
          <motion.span variants={letterVariants} key={index}>
            {recoTextLetter}
          </motion.span>
        ))}
        <motion.span variants={letterVariants} className="quote color-gray">
          »
        </motion.span>
      </HeadingStyles>
      <PStyles
        as={motion.p}
        variants={itemVariants}
        custom={10}
        fontSize={12}
        lineHeight={15}
        letterSpacing={0.6}
      >
        Source : <a onClick={handleSourceClick}>{reco.source}</a>
      </PStyles>
    </RecoItemStyles>
  );
};

export default RecoItem;
