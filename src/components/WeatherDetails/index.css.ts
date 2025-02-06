import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
});

export const titleStyle = style({
  fontWeight: '600',
  fontSize: '2rem',
  lineHeight: '2rem',
});

export const cardsWrapperStyle = style({
  display: 'flex',
  gap: '3.4rem',
});
