import { createMaterialTopTabNavigator } from 'react-navigation'
import HotListScreen from './HotListScreen'
import TopFiveQustionsScreen from './TopFiveQustionsScreen'
import TopTenTagsScreen from './TopTenTagsScreen'

export const HomeStack = createMaterialTopTabNavigator(
  {
    HotList: { screen: HotListScreen },
    TopFiveQustions: { screen: TopFiveQustionsScreen },
    TopTenTags: { screen: TopTenTagsScreen }
  },
  {
    swipeEnabled: false,
    initialRouteName: 'HotList',
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      indicatorStyle: {
        backgroundColor: '#FF9800'
      },
      style: { backgroundColor: '#fff' }
    }
  }
);

HomeStack.navigationOptions = {
  title: 'Sharestation',
  headerTintColor: '#333'
};