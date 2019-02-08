import { createMaterialTopTabNavigator } from 'react-navigation';
import HotListScreen from './HotListScreen';
import TopFiveQustionsScreen from './TopFiveQustionsScreen';
import TopTenTagsScreen from './TopTenTagsScreen';
import { orange } from '../resources/colors'

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
        backgroundColor: orange.light
      },
      style: { backgroundColor: 'white' }
    }
  }
);

HomeStack.navigationOptions = {
  title: 'Sharestation',
  headerTintColor: 'black'
};