import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import { textStyle } from '@/components/Text/index.css';

interface TextProps extends ComponentPropsWithoutRef<'p'> {
  tag?: 'b1' | 'b2' | 'b3';
  color?: 'black' | 'gray';
}

const Text = ({
  tag = 'b2',
  color = 'black',
  children,
  className,
  ...props
}: TextProps) => {
  return (
    <p className={clsx(className, textStyle({ tag, color }))} {...props}>
      {children}
    </p>
  );
};

export default Text;
