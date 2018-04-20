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
     showName: false
   } 
  }
  render() {
    let fullName = 'Author: ' + this.state.name + ' ' +  this.state.surname
    fullName = this.state.showName ? fullName : '' 

    return (
      <View>
        <Text>
          {this.props.message}
        </Text>
        <Text>
          {fullName}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
