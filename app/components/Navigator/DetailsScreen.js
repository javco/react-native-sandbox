import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
} from 'react-native';


export default class DetailsScreen extends Component {
  
  constructor(props){
    super(props);
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
})

AppRegistry.registerComponent('DetailsScreen', () => DetailsScreen)