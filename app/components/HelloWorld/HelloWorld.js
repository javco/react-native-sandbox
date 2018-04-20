import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

export default class HelloWorld extends Component {
  constructor(){
   super();
   this.state = {
     name: 'John',
     surname: 'Doe',
   } 
  }
  render() {
    return (
      <View>
        <Text>
          {this.props.message}
        </Text>
        <Text>
          {this.state.name} {this.state.surname}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
