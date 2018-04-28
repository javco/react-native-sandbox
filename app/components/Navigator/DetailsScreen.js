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
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
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

AppRegistry.registerComponent('DetailsScreen', () => DetailsScreen)
