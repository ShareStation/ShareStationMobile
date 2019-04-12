import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TopTenTagsScreen extends Component {

  static navigationOptions = {
    title: 'Top 10 Tags'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Top 10 tags
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