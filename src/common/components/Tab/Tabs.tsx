import type { ComponentPropsWithoutRef } from 'react';

type TabsProps = ComponentPropsWithoutRef<'nav'>;

const Tabs = ({ children, ...props }: TabsProps) => {
  return <div {...props}>{children}</div>;
};

export default Tabs;
