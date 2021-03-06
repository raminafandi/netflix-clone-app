import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Title from '../shared/Title';
import CardList from '../shared/CardList';

import { ScrollView } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
  const [movies, setMovies] = useState([
    {
      title: 'Avengers: Infinity War',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg',
      bgImageUrl:
        'https://www.nme.com/wp-content/uploads/2018/04/Screen_Shot_2018_04_24_at_6-696x442.png',
      rating: 8,
      genre: 'Fantasy,Action',
      duration: '2h15m',
      description:
        'Lorem ipsum dolor sit ame. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Odio facilisis mauris sit amet. odo sed egestas egestas. Penatibus et magnis dis parturient montes.',
      key: '1'
    },
    {
      title: 'Dunkirk',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61jphewUR6L._AC_SL1111_.jpg',
      bgImageUrl: 'https://wallpaperaccess.com/full/1301014.jpg',
      rating: 8,
      genre: 'Fantasy,Action',
      duration: '2h15m',
      description:
        'Lorem ipsum dolor sit ame. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Odio facilisis mauris sit amet. odo sed egestas egestas. Penatibus et magnis dis parturient montes.',
      key: '2'
    },
    {
      title: 'Logan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg',
      bgImageUrl:
        'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/fox-031859-Full-Image_GalleryBackground-en-US-1494632286397._SX1080_.jpg',

      rating: 9,
      genre: 'Fantasy,Action',
      duration: '2h15m',
      description:
        'Lorem ipsum dolor sit ame. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Odio facilisis mauris sit amet. odo sed egestas egestas. Penatibus et magnis dis parturient montes.',

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
    <ScrollView style={styles.component}>
      <View>
        <Title title={'Recently Added'} iconName={'ios-arrow-forward'} />
        <CardList data={movies} navigation={navigation} />
      </View>
      <View>
        <Title title={'Trending Series'} iconName={'ios-arrow-forward'} />
        <CardList data={trendingTvSeries} navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  component: {
    padding: 5,
    backgroundColor: '#0B0A0A'
  }
});
