import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function MovieCard(props) {
  return (
    <View style={styles.movieCard}>
      <Image
        style={{ width: '35%', height: 85 }}
        source={{
          uri: props.url
        }}
      />
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>{props.title}</Text>
        <Ionicons name="ios-play" size={35} style={styles.playIcon} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  movieCard: {
    borderBottomWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#262626'
  },
  movie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%'
  },
  movieTitle: {
    fontSize: 20,
    color: 'white',
    position: 'relative',
    alignSelf: 'center',
    textAlign: 'center',
    width: '80%'
  },
  playIcon: {
    alignSelf: 'center',
    paddingRight: 10
  }
});
