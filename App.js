import NewTab from './app/tabs/NewTab';
import TopTab from './app/tabs/TopTab';
import SearchTab from './app/tabs/SearchTab';
import HomeAuth from './app/screens/HomeAuth';
import { createBottomTabNavigator, createAppContainer,  createSwitchNavigator, createStackNavigator} from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
  New: NewTab,
  Top: TopTab,
  Search: SearchTab,
});


const AuthStack = createSwitchNavigator({
  HomeAuth: HomeAuth,
  App: TabNavigator

})

export default createAppContainer(AuthStack);
