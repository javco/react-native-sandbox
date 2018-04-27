import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class ListItem extends Component {
  
  constructor(props){
    super(props);
  }

  render() {

    return (
      <View>
        <Text>Item Detail</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
})

AppRegistry.registerComponent('ListItem', () => ListItem)
