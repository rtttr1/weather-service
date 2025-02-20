import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const tabDefaultStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  whiteSpace: 'nowrap',

  cursor: 'pointer',
});

export const tabVariantStyle = recipe({
  variants: {
    variant: {
      primary: {
        padding: '1.4rem 0',

        color: '#99A1B2',
        fontWeight: '600',
        fontSize: '2rem',
        lineHeight: '2rem',
      },
    },
  },
});

export const tabActiveStyle = recipe({
  variants: {
    variant: {
      primary: {
        paddingBottom: '1.rem',

        borderBottom: '2px solid #0E121B',

        color: '#0E121B',
      },
    },
  },
});

export const tabListStyle = recipe({
  variants: {
    variant: {
      primary: {
        display: 'flex',
        gap: '1rem',
      },
    },
  },
});
