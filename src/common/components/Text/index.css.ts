import { recipe } from '@vanilla-extract/recipes';

export const textStyle = recipe({
  variants: {
    fontTag: {
      h1: {
        fontWeight: '400',
        fontSize: '8rem',
        lineHeight: '8rem',
      },
      h2: {
        fontWeight: '500',
        fontSize: '5rem',
        lineHeight: '5rem',
      },
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
      b4: {
        fontWeight: '600',
        fontSize: '2.2rem',
        lineHeight: '2.2rem',
      },
    },
    color: {
      black: {
        color: '#0E121B',
      },
      gray: {
        color: '#99A1B2',
      },
      white: {
        color: '#FFFFFF',
      },
    },
  },
});
