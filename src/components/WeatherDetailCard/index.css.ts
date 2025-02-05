import { createVar, style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '23rem',
  height: '20rem',
  padding: '2.5rem',

  backgroundColor: '#ffffff',
  borderRadius: '10px',
});

export const detailWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginTop: '2rem',
});

export const figureWrapper = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.4rem',
});

export const cylindricalStyle = style({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',

  width: '2.4rem',
  height: '10rem',

  border: '1px solid #DFE1E8',
  borderRadius: '20px',
});

export const circlePosition = createVar();

export const circleStyle = style({
  position: 'absolute',
  bottom: circlePosition,

  width: '1.6rem',
  height: '1.6rem',

  borderRadius: '100%',
  backgroundColor: '#6D77FF',
});
