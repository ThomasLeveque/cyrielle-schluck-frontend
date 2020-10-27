import { Variants } from 'framer-motion';

export const buttonTransition = { ease: 'easeOut', duration: 0.3 };

export const buttonYVariants: Variants = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 },
};

export const buttonXVariants: Variants = {
  initial: (xValue) => ({ opacity: 0, x: xValue || 5 }),
  animate: { opacity: 1, x: 0 },
  exit: (xValue) => ({ opacity: 0, x: xValue || 5 }),
};
