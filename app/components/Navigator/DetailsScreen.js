import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';


export default class DetailsScreen extends Component {
  
  constructor(props){
    super(props);
  }

  /**
   * In order to use params in the title, we need to make navigationOptions 
   * a function that returns a configuration object. It might be tempting to 
   * try to use this.props inside of navigationOptions, but because it is a 
   * static property of the component, this does not refer to an instance of 
   * the component and therefore no props are available. Instead, if we make 
   * navigationOptions a function then React Navigation will call it with an 
   * object containing { navigation, navigationOptions, screenProps } -- in 
   * this case, all we care about is navigation, which is the same object that
   *  is passed to your screen props as this.props.navigation. You may recall
   *  that we can get the params from navigation through navigation.state.params,
   *  and so we do this below to extract a param and use it as a title.
   */
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
    }
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={styles.centerView}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <View style={styles.btnContainer}>
          <Button
            title="Update!"
            onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Go Back!"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  centerView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  btnContainer: {
    paddingTop: 20,
  }
})

AppRegistry.registerComponent('DetailsScreen', () => DetailsScreen)
