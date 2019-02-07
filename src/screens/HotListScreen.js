import React from 'react';
import { View, StyleSheet } from 'react-native';
import { QuestionCard } from '../components/Card'

export default class HotListScreen extends React.Component {

  static navigationOptions = {
    title: 'Hot List'
  };

  render() {
    return (
      <View style={styles.container}>
        <QuestionCard
          thumbnail={'http://lorempixel.com/256/256/'}
          date="Mar 12, 2019"
          author="Caique"
          question="Sei lá"
          tags={[
            '#test',
            '#nada'
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: '#333',
  }
})
