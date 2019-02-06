import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TopFiveQustionsScreen extends Component {

  static navigationOptions = {
    title: 'Top 5 Questions'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Top 5 Questions
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