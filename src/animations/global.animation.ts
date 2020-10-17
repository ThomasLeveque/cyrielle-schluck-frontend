export const transition = { duration: 0.4, ease: 'easeOut' };

export const itemVariants = {
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

export const itemXVariants = {
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

export const delayStaggerChildrenVariants = {
  initial: (yValue: number) => ({
    opacity: 0,
    y: yValue || 20,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transition, delayChildren: .25, staggerChildren: .15 },
  },
};

export const letterVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0 },
  },
};

export const stagger = {
  animate: (staggerValue: number) => ({
    transition: {
      staggerChildren: staggerValue || 0.1,
    },
  }),
};
