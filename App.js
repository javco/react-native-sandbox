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

import Component1 from './app/components/Component1/Component1';

export default class reactnativehw extends Component {
  render() {
    return (
      <View>
        {/*}
        <Text>
          Hello World!
        </Text>
        */}
        <Component1 />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactnativehw', () => reactnativehw)
