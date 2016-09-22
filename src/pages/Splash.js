import React, { Component } from 'react';

import { View, Text } from 'react-native';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let nav = this.props.navigator;

    setTimeout(() => {
      nav.replace({
        id: 'Main'
      });
    }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>篮球助手</Text>
      </View>
    );
  }
}

export default Splash;
