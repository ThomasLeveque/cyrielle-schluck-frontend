import React from 'react';
import { useRouter } from 'next/router';
import { motion, Variants, AnimatePresence } from 'framer-motion';

import { FooterStyles } from './footer.styles';

const buttonVariants: Variants = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 },
};

const buttonTransition = { ease: 'easeOut', duration: 0.3 };

interface footerProps {}

const Footer: React.FC<footerProps> = () => {
  const router = useRouter();
  const { projectSlug } = router.query;

  return (
    <FooterStyles>
      <AnimatePresence>
        {projectSlug && (
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
        {projectSlug && (
          <motion.button
            key="nextButton"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
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
