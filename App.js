/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import HomeScreen from './app/components/Navigator/HomeScreen';
import DetailsScreen from './app/components/Navigator/DetailsScreen';

export default class sandbox extends Component {

  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);
AppRegistry.registerComponent('sandbox', () => sandbox)


// a scene is a view, a page, a component... whatever you want to call it

// route: to attach parameters to our routes
