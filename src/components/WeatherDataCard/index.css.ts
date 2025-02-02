import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  padding: '2.2rem 3rem',

  backgroundColor: 'white',
  borderRadius: '10px',
});

export const temperatureWrapper = style({
  display: 'flex',
  gap: '1rem',
});
