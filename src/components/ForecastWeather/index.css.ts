import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',

  paddingLeft: '10rem',
  width: 'calc(100% - 40rem)',

  marginTop: '6rem',

  '@media': {
    'screen and (max-width: 640px)': {
      width: '100%',
    },
  },
});
