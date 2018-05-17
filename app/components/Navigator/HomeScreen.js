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


class CustomHeader extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.centerHeader}>
        <Text>back</Text>
        <Text>Custom Header</Text>
        <Button
          title="Menu"
        />
      </View>
    );
  }
}


export default class HomeScreen extends Component {
  
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    headerTitle: <CustomHeader />,
  };

  render() {
    return (
      <View style={styles.centerView}>
        <Text>Home Screen</Text>
        <View style={styles.btnContainer}>
          <Button
            title="Go to Details!"
            /* 1. Navigate to the Details route with params */
            onPress={() => {
              this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Go to Video!"
            onPress={() => {
              this.props.navigation.navigate('Video');
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Go to WebView!"
            onPress={() => {
              this.props.navigation.navigate('WebView');
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerHeader: {
    padding: 5,
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  centerView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  btnContainer: {
    paddingTop: 20,
  }
})

AppRegistry.registerComponent('HomeScreen', () => HomeScreen)
