import {
  inputContainerStyle,
  inputStyle,
  inputWrapperStyle,
} from '@/common/components/Input/index.css';
import { useRef, type ReactSVGElement } from 'react';
import type { ComponentPropsWithRef } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  variant: 'primary';
  prevIcon?: JSX.Element;
  suffixIcon?: JSX.Element;
}

const Input = ({ variant, prevIcon, suffixIcon, ...props }: InputProps) => {
  const inputRef = useRef(null);

  return (
    <label className={inputContainerStyle({ variant })}>
      <div className={inputWrapperStyle}>
        {prevIcon}
        <input className={inputStyle({ variant })} ref={inputRef} {...props} />
        {suffixIcon}
      </div>
    </label>
  );
};

export default Input;
