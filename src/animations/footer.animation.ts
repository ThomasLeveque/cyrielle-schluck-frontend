import { Variants } from 'framer-motion';

export const buttonTransition = { ease: 'easeOut', duration: 0.3 };

export const buttonVariants: Variants = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 },
};
