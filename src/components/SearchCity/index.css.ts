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

    border: '1px solid #99A1B2',
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

export const cityListTextStyle = style({
  width: '100%',
  padding: '1rem',

  borderRadius: '10px',

  textAlign: 'left',
  fontWeight: '400',
  fontSize: '1.4rem',
  lineHeight: '1.4rem',
  color: '#99A1B2',

  cursor: 'pointer',

  selectors: {
    '&:hover, &:focus': {
      backgroundColor: '#F8F8FB',
    },
  },
});

export const searchTextStyle = style({
  width: '100%',
  padding: '1rem',
});
