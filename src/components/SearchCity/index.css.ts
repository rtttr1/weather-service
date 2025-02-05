import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const cityListWrapperStyle = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '120%',
    zIndex: '1',

    width: '28rem',
    height: '20rem',
    padding: '1rem',

    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: '#ffffff',

    overflow: 'scroll',
  },
  variants: {
    open: {
      true: {
        visibility: 'visible',
      },
      false: {
        visibility: 'hidden',
      },
    },
  },
});

export const searchedCityStyle = style({
  padding: '1rem',

  borderRadius: '10px',

  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: '#F8F8FB',
    },
  },
});

export const cityListTextStyle = style({
  width: '26rem',
});
