import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { QuestionCard } from '../components/Card';

import { questions } from '../data';

export default class HotListScreen extends React.Component {

  static navigationOptions = {
    title: 'Hot List'
  };

  componentWillMount = () => {
    console.log('questions', questions)
  }


  renderItem = ({ item }) => {
    return (
      <QuestionCard
        solved={item.solved}
        thumbnail={item.thumbnail}
        date={item.date}
        author={item.author}
        question={item.question}
        tags={item.tags}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={questions}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
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
