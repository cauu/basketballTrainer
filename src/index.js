import React, { Component } from 'react';

import { Navigator, Text } from 'react-native';

import Splash from './pages/Splash.js';
import Main from './pages/Main.js';
import Scene1 from './pages/Scene1.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    let routeId = route.id;

    switch(routeId) {
      case 'Splash': 
        return (
          <Splash
            navigator={ navigator }
            />
        );
      case 'Main':
        return (
          <Main
            navigator={ navigator }
            />
        );
      case 'Scene1':
        return (
          <Scene1
            navigator={ navigator }
            />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'Splash', name: 'Index' }}
        renderScene={ this.renderScene }
        />
    );
  }
}

export default App;
