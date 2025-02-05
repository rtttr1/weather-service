import TabButton from '@/common/components/Tab/TabButton';
import TabList from '@/common/components/Tab/TabList';
import TabPanel from '@/common/components/Tab/TabPanel';
import TabContainer from '@/common/components/Tab/Tab';

export const Tab = Object.assign(TabContainer, {
  Button: TabButton,
  List: TabList,
  Panel: TabPanel,
});
