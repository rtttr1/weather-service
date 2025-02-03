import React, { cloneElement } from 'react';
import type { ComponentPropsWithoutRef, ReactElement } from 'react';

interface TabPanelProps extends ComponentPropsWithoutRef<'div'> {
  selectedTab: number;
}

const TabPanel = ({ children, selectedTab, ...props }: TabPanelProps) => {
  return (
    <section {...props}>
      {React.Children.toArray(children)
        .map((child, index) =>
          cloneElement(child as ReactElement, {
            role: 'tabpanel',
            id: `panel-${index}`,
            ariaLabelledby: index,
          }),
        )
        .filter((_, index) => index === selectedTab)}
    </section>
  );
};

export default TabPanel;
