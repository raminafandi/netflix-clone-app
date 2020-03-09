import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Card from '../shared/Card';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
  const [movies, setMovies] = useState([
    {
      title: 'Avengers: Infinity War',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg',
      rating: 8,
      body: 'lorem ipsum',
      key: '1'
    },
    {
      title: 'Dunkirk',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61jphewUR6L._AC_SL1111_.jpg',
      rating: 8,
      body: 'lorem ipsum',
      key: '2'
    },
    {
      title: 'Logan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg',
      rating: 9,
      body: 'lorem ipsum',
      key: '3'
    }
  ]);

  const trendingTvSeries = [
    {
      title: 'Breaking Bad',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,718,1000_AL_.jpg',
      rating: 8,
      body: 'lorem ipsum',
      key: '1'
    },
    {
      title: 'Vikings',
      imageUrl:
        'https://ih0.redbubble.net/image.439721702.7835/flat,550x550,075,f.u3.jpg',
      rating: 8,
      body: 'lorem ipsum',
      key: '2'
    },
    {
      title: 'How I Met Your Mother',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BZWJjMDEzZjUtYWE1Yy00M2ZiLThlMmItODljNTAzODFiMzc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
      rating: 9,
      body: 'lorem ipsum',
      key: '3'
    },
    {
      title: 'Game of Thrones',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg',
      rating: 9,
      body: 'lorem ipsum',
      key: '4'
    }
  ];
  return (
    <View style={styles.component}>
      <ScrollView>
        <View>
          <Text>Recently Added</Text>
          <FlatList
            horizontal
            data={movies}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetails', item)}>
                <Card>
                  <Image
                    style={{ width: 140, height: 220, borderRadius: 4 }}
                    source={{ uri: item.imageUrl }}
                  />
                  <Text small bold numberOfLines={1} style={styles.titleText}>
                    {item.title}
                  </Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Text>Trending Series</Text>
          <FlatList
            horizontal
            data={trendingTvSeries}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetails', item)}>
                <Card>
                  <Image
                    style={{ width: 140, height: 220, borderRadius: 4 }}
                    source={{ uri: item.imageUrl }}
                  />
                  <Text style={styles.titleText}>{item.title}</Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#0B0A0A'
  },
  titleText: {
    color: 'white'
  }
});
