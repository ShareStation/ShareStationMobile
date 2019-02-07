import React, { Component } from 'react';
import PropType from 'prop-types'
import Icon from 'react-native-vector-icons/EvilIcons'
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
} from 'native-base'


export class QuestionCard extends Component {
  render() {

    const {
      thumbnail,
      question,
      author,
      date,
      tags
    } = this.props;

    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: thumbnail }} />
                <Body>
                  <Text>{author}</Text>
                  <Text note>{date}</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="check" size={42} />
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
                {tags}
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

QuestionCard.propTypes = {
  tags: PropType.arrayOf(PropType.string).isRequired,
  question: PropType.string.isRequired,
  author: PropType.string.isRequired,
  date: PropType.string.isRequired,
  thumbnail: PropType.string.isRequired
};