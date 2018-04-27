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

//import HelloWorld from './app/components/HelloWorld/HelloWorld';
import MoviesList from './app/components/MoviesList/MoviesList';

export default class sandbox extends Component {
  render() {
    return (
      <View>
        <MoviesList />
      </View>
    );
  }
}

AppRegistry.registerComponent('sandbox', () => sandbox)
