import {
  inputContainerStyle,
  inputStyle,
  inputWrapperStyle,
} from '@/common/components/Input/index.css';
import {
  forwardRef,
  type ComponentPropsWithRef,
  type ForwardedRef,
} from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  variant: 'primary';
  prevIcon?: JSX.Element;
  suffixIcon?: JSX.Element;
}

const Input = (
  { variant, prevIcon, suffixIcon, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <label className={inputContainerStyle({ variant })}>
      <div className={inputWrapperStyle}>
        {prevIcon}
        <input className={inputStyle({ variant })} ref={ref} {...props} />
        {suffixIcon}
      </div>
    </label>
  );
};

export default forwardRef(Input);
