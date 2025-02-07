import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',

  width: 'calc(100% - 50rem)',
  marginTop: '6rem',
});
