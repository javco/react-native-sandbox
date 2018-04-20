import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class HelloWorld extends Component {
  
  constructor(props){
   super(props);
   this.state = {
     name: 'John',
     surname: 'Doe',
     showName: true,
     message: this.props.message
   } 
  }

  static defaultProps = {
    message: 'Hi there',
  }

  render() {
    let fullName = 'Author: ' + this.state.name + ' ' +  this.state.surname
    fullName = this.state.showName ? fullName : '' 
    
    return (
      <View style={{backgroundColor: '#3d3d3d', height: '100%'}}>
        <Text style={{color: 'white'}}>
          {this.state.message}
        </Text>
        <Text style={{color: 'white'}}>
          {fullName}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
