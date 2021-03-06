import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from 'styled-components';

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
  const theme = useContext(ThemeContext);

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
      as={motion.article}
      exit={{ opacity: 0, transition }}
      initial="initial"
      animate="animate"
      asUrl={!!reco.sourceUrl}
    >
      <HeadingStyles
        as={motion.h3}
        variants={stagger}
        custom={letterStagger}
        fontSize={28}
        lineHeight={1.4}
        fontWeight={400}
        letterSpacing={1}
        mb={theme.vars.sSpace}
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
        lineHeight={1.25}
        letterSpacing={0.6}
      >
        Source : {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={handleSourceClick}>
          {reco.source}
        </a>
      </PStyles>
    </RecoItemStyles>
  );
};

export default RecoItem;
