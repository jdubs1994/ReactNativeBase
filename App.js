import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import NewTab from './app/tabs/NewTab';
import TopTab from './app/tabs/TopTab';
import SearchTab from './app/tabs/SearchTab';

const TabNavigator = createBottomTabNavigator({
  New: NewTab,
  Top: TopTab,
  Search: SearchTab,
});


export default createAppContainer(TabNavigator);
