import '@/styles/global.css';
import '@/styles/reset.css';
import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  display: 'flex',
  gap: '10rem',

  width: '100%',
  height: '100%',
  backgroundColor: '#F2F0FE',

  '@media': {
    'screen and (max-width: 640px)': {
      flexDirection: 'column',
    },
  },
});
