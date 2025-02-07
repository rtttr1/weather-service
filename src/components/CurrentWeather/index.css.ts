import { style } from '@vanilla-extract/css';
import cityImg from '@/assets/img/city.jpg';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4rem',

  padding: '4rem 6rem',
  height: '100vh',
  width: '40rem',

  backgroundColor: '#FFFFFF',
  borderRadius: '0 20px 20px 0',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
});

export const dateWrapperStyle = style({
  display: 'flex',
  gap: '1.6rem',
});

export const dividerStyle = style({
  width: '28rem',
  height: '0.1rem',

  backgroundColor: '#C3C7CF',
});

export const currentWeatherWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
});

export const cityImageStyle = style({
  position: 'relative',
  backgroundImage: `url(${cityImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  width: '28rem',
  height: '10rem',
  padding: '4rem 3rem',

  borderRadius: '10px',
});
