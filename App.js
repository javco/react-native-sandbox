/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import HelloWorld from './app/components/HelloWorld/HelloWorld';

export default class sandbox extends Component {
  render() {
    return (
      <View>
        {/*}
        <Text>
          Hello World!
        </Text>
        */}
        <HelloWorld message="Hello Component, welcome to the world!" />
      </View>
    );
  }
}

AppRegistry.registerComponent('sandbox', () => sandbox)
