import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Title from '../shared/Title';
import MovieCard from '../shared/MovieCard';

export default function Search() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Ionicons name="ios-search" style={{ fontSize: 28 }} />
          <TextInput
            placeholder="Search for a show, movie,genre an etc."
            style={styles.searchBarInput}
          />
          <Ionicons name="ios-mic" style={{ fontSize: 28 }} />
        </View>
        <Title title="Popular Searches" />
        <View>
          <MovieCard
            title="Money Heist"
            url="https://guardian.ng/wp-content/uploads/2020/03/money-heist.jpg"
          />
          <MovieCard
            title="The Dark Knight"
            url="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/Batman-5-Ways-The-Dark-Knight-Has-Aged-Poorly-5-Ways-It-s-Timeless-Featured-Image.jpg"
          />
          <MovieCard
            title="Star Wars : The Clone Wars"
            url="https://specials-images.forbesimg.com/imageserve/5e4fcb8b7a0098000733e4a8/960x0.jpg?fit=scale"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#1b1b1b',
    width: '100%'
  },
  searchBar: {
    height: '10%',
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    alignItems: 'center'
  },
  searchBarInput: {
    fontSize: 18,
    paddingHorizontal: 15
  }
});
