import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HotListScreen extends React.Component {

  static navigationOptions = {
    title: 'Hot List'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hot list
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
