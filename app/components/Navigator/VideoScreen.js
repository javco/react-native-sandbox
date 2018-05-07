import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import Video from 'react-native-video';
//import LightVideo from './light.mp4';

export default class VideoScreen extends Component {
  
  constructor(props){
    super(props);

  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
    }
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    
    return (
      <View style={styles.container}>  
        <Text>Hola</Text>
        <Video
          //source={LightVideo}
          source={{ uri: 'http://video.acb.com/lacb_62_26_234_zza_jov_16x9_LQ.mp4'  }}
          resizeMode='contain'
          style={StyleSheet.absoluteFill}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

AppRegistry.registerComponent('DetailsScreen', () => DetailsScreen)
