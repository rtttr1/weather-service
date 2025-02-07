import React, { cloneElement } from 'react';
import { tabListStyle } from '@/common/components/Tab/index.css';
import type { ComponentPropsWithoutRef, ReactElement } from 'react';

interface TabListProps extends ComponentPropsWithoutRef<'ul'> {
  variant: 'primary';
  selectedTab: number;
  onTabClick: (tabId: number) => void;
}

const TabList = ({
  variant,
  selectedTab,
  onTabClick,
  children,
  ...props
}: TabListProps) => {
  return (
    <nav>
      <ul role="tablist" className={tabListStyle({ variant })} {...props}>
        {React.Children.toArray(children).map((child, index) =>
          cloneElement(child as ReactElement, {
            tabId: index,
            isSelected: selectedTab === index,
            onTabClick: onTabClick,
          }),
        )}
      </ul>
    </nav>
  );
};

export default TabList;
