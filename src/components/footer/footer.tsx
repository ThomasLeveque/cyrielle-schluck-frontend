import React from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

import { FooterStyles } from './footer.styles';

const buttonVariants: Variants = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 },
};

const buttonTransition = { ease: 'easeOut', duration: 0.3 };

interface footerProps {
  isProjectPage?: boolean;
}

const Footer: React.FC<footerProps> = ({ isProjectPage = false }) => {
  return (
    <FooterStyles>
      <AnimatePresence>
        {isProjectPage && (
          <motion.button
            key="prevButton"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={buttonTransition}
          >
            {'< PROJET PRÉCÉDENT'}
          </motion.button>
        )}
        <p>
          <span>Contactez-moi :</span> cyrielle.schluck@gmail.com
        </p>
        {isProjectPage && (
          <motion.button
            key="nextButton"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={buttonTransition}
          >
            {'PROJET SUIVANT >'}
          </motion.button>
        )}
      </AnimatePresence>
    </FooterStyles>
  );
};

export default Footer;
