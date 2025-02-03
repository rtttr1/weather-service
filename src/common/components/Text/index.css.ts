import { recipe } from '@vanilla-extract/recipes';

export const textStyle = recipe({
  variants: {
    fontTag: {
      b1: {
        fontWeight: '600',
        fontSize: '2rem',
        lineHeight: '2rem',
      },
      b2: {
        fontWeight: '400',
        fontSize: '2rem',
        lineHeight: '2rem',
      },
      b3: {
        fontWeight: '400',
        fontSize: '1.4rem',
        lineHeight: '1.4rem',
      },
    },
    color: {
      black: {
        color: '#0E121B',
      },
      gray: {
        color: '#99A1B2',
      },
    },
  },
});
