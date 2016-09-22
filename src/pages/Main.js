import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  getDefaultProps() {
    return {
      title: 'Main scene'
    }
  }

  render() {
    return (
      <View>
        <Text>My name is { this.props.title }</Text>
      </View>
    );
  }
}

export default Main;
