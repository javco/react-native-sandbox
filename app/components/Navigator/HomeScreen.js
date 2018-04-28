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
      <View style={styles.centerView}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          /* 1. Navigate to the Details route with params */
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})

AppRegistry.registerComponent('HomeScreen', () => HomeScreen)
