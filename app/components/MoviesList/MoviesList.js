import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native';

export default class MoviesList extends Component {
  
  constructor(props){
   super(props);
  
   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {
    moviesDataSource: ds.cloneWithRows(movies),
   }
   
  }

  renderRow(movie, sectionId, rowId, highlightRow){
    return(
      <View style={styles.row}>
        <Text style={styles.itemTitle} >{movie.name}</Text>
      </View>
    )
  }

  render() {

    return (
      <View>
        <View>
          {/*<Text>Movies List</Text>*/}
          <ListView
            dataSource={this.state.moviesDataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const movies = [
  { name: 'Matrix' },
  { name: 'Matrix Reloaded' },
  { name: 'Matrix Revolution' },
  { name: 'The Silence of the Lambs' },
  { name: 'The Godfather I' },
  { name: 'The Godfather II' },
  { name: 'The Godfather III' },
  { name: 'Apocalypse Now' },
  { name: 'Who framed Roger Rabbit?' },
  { name: 'Reservoir Dogs' },
  { name: 'Pulp Fiction' },
  { name: 'Jackie Brown' },
  { name: 'Kill Bill' },
  { name: 'Death Proof' },
  { name: 'Inglourious Basterds' },
  { name: 'Django Unchained' },
  { name: 'The Hateful Eight' },
  { name: 'Once Upon a Time in Hollywood' },
]

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

AppRegistry.registerComponent('MoviesList', () => MoviesList)
