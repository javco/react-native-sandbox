import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
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

  onPress = () => {
    console.log('Box 1 clicked');
  }

  onPress2(){
    console.log('Box 2 clicked');
  }

  render() {
    let fullName = 'Author: ' + this.state.name + ' ' +  this.state.surname
    fullName = this.state.showName ? fullName : '' 
    
    return (
      <View style={styles.myView}>
        <Text style={styles.myText}>
          {this.state.message}
        </Text>
        <Text style={styles.myText}>
          {fullName}
        </Text>
        <View style={styles.containerv1}>
          <TouchableHighlight 
            style={styles.box1} 
            onPress={this.onPress}
            underlayColor="blue" >
            <Text style={styles.myText}>
              Box 1
            </Text>
          </TouchableHighlight>
          <TouchableOpacity 
            style={styles.box2}
            onPress={this.onPress2}
           >
            <Text style={styles.myText}>
              Box 2
            </Text>
          </TouchableOpacity>
          <View style={styles.box3}>
            <Text style={styles.myText}>
              Box 3
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: '#3d3d3d',
    height: '100%',
    padding: 20
  },
  myText: {
    color: 'white'
  },
  containerv1: {
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  box1: {
    flex: 1,
    backgroundColor: 'tomato',
    padding: 10,
  },
  box2: {
    flex: 1,
    backgroundColor: '#4286f4',
    padding: 10,
  },
  box3: {
    flex: 1,
    backgroundColor: '#1dd18c',
    padding: 10,
  }
})

AppRegistry.registerComponent('HelloWorld', () => HelloWorld)
