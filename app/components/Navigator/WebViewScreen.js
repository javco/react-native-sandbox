import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  WebView,
  StyleSheet,
} from 'react-native';


export default class WebViewScreen extends Component {
  
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
      title: params ? params.otherParam : 'WebView Screen',
    }
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    var HtmlCode = '<h1> h1 Heading Tag</h1>' +
      '<p> Sample Paragraph Tag </p>' +
      '<img src="https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png" alt="Image" width="250" height="150" >' ;
                     
      return (
    
        <WebView 
          style={styles.WebViewStyle}  
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ html: HtmlCode }} />
      );
  }
}


const styles = StyleSheet.create({
  WebViewStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    backgroundColor: '#ADD8E6',
  }
})

AppRegistry.registerComponent('WebViewScreen', () => WebViewScreen)
