import { Variants } from 'framer-motion';

export const transition = { duration: 0.4, ease: 'easeOut' };
export const staggerChildrenDefault = 0.1;

export const itemVariants: Variants = {
  initial: (yValue: number) => ({
    opacity: 0,
    y: yValue || 20,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const itemVariantsDelay: Variants = {
  initial: ({ yValue }) => ({
    opacity: 0,
    y: yValue || 20,
  }),
  animate: ({ delay }) => ({
    opacity: 1,
    y: 0,
    transition: { ...transition, delay: delay || 0 },
  }),
};

export const itemXVariants: Variants = {
  initial: (xValue: number) => ({
    opacity: 0,
    x: xValue || 20,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition,
  },
};

export const delayStaggerChildrenVariants: Variants = {
  initial: (yValue: number) => ({
    opacity: 0,
    y: yValue || 20,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transition, delayChildren: 0.25, staggerChildren: 0.15 },
  },
};

export const letterVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0 },
  },
};

export const stagger: Variants = {
  animate: (staggerValue: number) => ({
    transition: {
      staggerChildren: staggerValue || staggerChildrenDefault,
    },
  }),
};
