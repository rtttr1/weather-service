import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const inputContainerStyle = recipe({
  variants: {
    variant: {
      primary: {
        padding: '1.2rem',

        '&:has(input:focus)': {
          outline: '1px solid #99A1B2',
          borderRadius: '10px',
        },
      },
    },
  },
});

export const inputWrapperStyle = style({
  display: 'flex',
  gap: '1rem',
});

export const inputStyle = recipe({
  base: {},
  variants: {
    variant: {
      primary: {
        width: '23rem',

        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '14px',
      },
    },
  },
});
