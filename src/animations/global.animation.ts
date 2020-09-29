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
