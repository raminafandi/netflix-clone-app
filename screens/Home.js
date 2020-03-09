import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabIcon = props => (
  <Ionicons
    name={'md-home'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
);

export default function Home({ navigation }) {
  navigationOptions = {
    tabBarIcon: TabIcon
  };
  const [movies, setMovies] = useState([
    {
      title: 'Avengers: Infinity War',
      rating: 8,
      body: 'lorem ipsum',
      key: '1'
    },
    { title: 'Dunkirk', rating: 8, body: 'lorem ipsum', key: '2' },
    { title: 'Logan', rating: 9, body: 'lorem ipsum', key: '3' }
  ]);
  return (
    <View style={styles.component}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetails', item)}>
            <Text style={StyleSheet.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    marginTop: 30
  }
});
