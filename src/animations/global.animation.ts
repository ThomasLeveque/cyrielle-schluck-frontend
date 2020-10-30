export const transition = { duration: 0.4, ease: 'easeOut' };
export const staggerChildrenDefault = 0.1;

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

export const itemVariantsDelay = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...transition, delay: delay || 0 },
  }),
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
    transition: { ...transition, delayChildren: 0.25, staggerChildren: 0.15 },
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
      staggerChildren: staggerValue || staggerChildrenDefault,
    },
  }),
};
