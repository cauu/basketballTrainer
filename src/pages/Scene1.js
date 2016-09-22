import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Scene1 extends Component {
  constructor(props) {
    super(props);
  }
  
  getDefaultProps() {
    return {
      title: 'Scene1'
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

export default Scene1;
