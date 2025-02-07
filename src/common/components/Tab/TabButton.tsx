import {
  tabActiveStyle,
  tabDefaultStyle,
  tabVariantStyle,
} from '@/common/components/Tab/index.css';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

export interface TabProps extends ComponentPropsWithoutRef<'button'> {
  tabId?: number;
  isSelected?: boolean;
  onTabClick?: (tabId: number) => void;
  variant?: 'primary';
}

const TabButton = ({
  tabId = 0,
  isSelected = false,
  onTabClick = () => {},
  variant = 'primary',
  children,
  ...props
}: TabProps) => {
  const handleTabInteraction = () => {
    onTabClick(tabId);
  };

  return (
    <li key={tabId}>
      <button
        type="button"
        role="tab"
        tabIndex={0}
        aria-selected={isSelected}
        aria-controls={`panel-${tabId}`}
        onClick={handleTabInteraction}
        onKeyDown={handleTabInteraction}
        className={clsx(
          tabDefaultStyle,
          tabVariantStyle({ variant }),
          isSelected && tabActiveStyle({ variant }),
        )}
        {...props}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
