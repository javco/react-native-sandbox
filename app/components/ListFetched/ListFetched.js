import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native';

export default class ListFetched extends Component {
  
  constructor(props){
    super(props);
  
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      postsDataSource: ds,
    }
   
  }

  componentDidMount(){
    this.fetchJSON();
  }

  fetchJSON(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          postsDataSource: this.state.postsDataSource.cloneWithRows(response)
        });
      });
  }

  renderRow(post, sectionId, rowId, highlightRow){
    return(
      <View style={styles.row}>
        <Text style={styles.itemTitle} >{post.title}</Text>
      </View>
    )
  }

  render() {

    return (
      <View>
        <View>
          <ListView
            dataSource={this.state.postsDataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    padding: 20,
    marginBottom: 1,
  },
  itemTitle: {
    flex: 1,
    color: 'white'
  },
})

AppRegistry.registerComponent('ListFetched', () => ListFetched)
