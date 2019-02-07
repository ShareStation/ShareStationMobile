import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropType from 'prop-types';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Thumbnail,
  Right
} from 'native-base';


export class QuestionCard extends Component {

  renderIconSolvedOrNot = () => {
    const { solved } = this.props;

    if (solved) return (<Icon name="check" size={42} color="#00E676" />);
    return (<Icon name="check" size={42} />);
  }

  render() {

    const {
      thumbnail,
      question,
      author,
      date,
      tags
    } = this.props;

    return (
      // <Container>
      <View style={styles.container}>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: thumbnail }} />
                <Body>
                  <Text numberOfLines={1}>{author}</Text>
                  <Text note>{date}</Text>
                </Body>
              </Left>
              <Right>
                {this.renderIconSolvedOrNot()}
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text numberOfLines={4}>
                  {question}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text note>
                {tags.join(' ')}
              </Text>
            </CardItem>
          </Card>
        </Content>
      </View>
      // </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
})


QuestionCard.defaultProps = {
  solved: false
};

QuestionCard.propTypes = {
  tags: PropType.arrayOf(PropType.string).isRequired,
  question: PropType.string.isRequired,
  author: PropType.string.isRequired,
  date: PropType.string.isRequired,
  thumbnail: PropType.string.isRequired,
  solved: PropType.bool
};