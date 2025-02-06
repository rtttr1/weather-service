import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  width: '10rem',
  padding: '2.2rem 0',

  backgroundColor: 'white',
  borderRadius: '10px',
});

export const temperatureWrapper = style({
  display: 'flex',

  gap: '0.5rem',
});
