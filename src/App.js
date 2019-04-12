import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { HomeStack } from './screens';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: HomeStack
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}