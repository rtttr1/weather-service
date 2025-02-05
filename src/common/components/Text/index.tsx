import { textStyle } from '@/common/components/Text/index.css';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

interface TextProps extends ComponentPropsWithoutRef<'p'> {
  fontTag?: 'h1' | 'h2' | 'b1' | 'b2' | 'b3' | 'b4';
  color?: 'black' | 'gray' | 'white';
}

const Text = ({
  fontTag = 'b2',
  color = 'black',
  children,
  className,
  ...props
}: TextProps) => {
  return (
    <p className={clsx(textStyle({ fontTag, color }), className)} {...props}>
      {children}
    </p>
  );
};

export default Text;
