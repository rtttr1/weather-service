import type { ComponentPropsWithoutRef } from 'react';

type TabProps = ComponentPropsWithoutRef<'nav'>;

const Tab = ({ children, ...props }: TabProps) => {
  return <div {...props}>{children}</div>;
};

export default Tab;
