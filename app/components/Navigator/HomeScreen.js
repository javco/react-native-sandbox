import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';


export default class HomeScreen extends Component {
  
  constructor(props){
    super(props);
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
})

AppRegistry.registerComponent('HomeScreen', () => HomeScreen)