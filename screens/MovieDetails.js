import React from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height;
import Title from '../shared/Title';

export default function MovieDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: navigation.getParam('bgImageUrl')
          }}
          style={styles.imgBack}>
          <View style={styles.imgBackView}>
            <Ionicons
              name="ios-arrow-round-back"
              size={50}
              style={styles.goBackIcon}
              onPress={pressHandler}
            />
            <View>
              <Image
                style={styles.imgMovie}
                source={{ uri: navigation.getParam('imageUrl') }}
              />
              <View style={styles.bottomPart}>
                <Text style={styles.titleMovie}>
                  {navigation.getParam('title')}
                </Text>
                <View style={styles.infoPart}>
                  <Text style={styles.infoText}>
                    {navigation.getParam('genre')}
                  </Text>
                  <Text style={styles.infoText}>
                    {navigation.getParam('duration')}
                  </Text>
                  <View style={styles.ratingInfo}>
                    <Ionicons name="ios-star" color="#BFA142" size={16} />
                    <Text style={styles.ratingText}>
                      {' '}
                      {navigation.getParam('rating')}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.area}>
          <Title title={'Movie Info'} iconName={'ios-arrow-down'} />
          <View style={styles.infoTextView}>
            <Text style={styles.infoText}>
              {navigation.getParam('description')}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight
  },

  imgBack: {
    width: '100%',
    height: 450
  },
  imgBackView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  goBackIcon: {
    alignSelf: 'flex-start',
    position: 'relative',
    top: 30,
    left: 20,
    color: 'white'
  },

  imgMovie: { width: 190, height: 300, borderRadius: 4, alignSelf: 'center' },
  bottomPart: {
    width: 250
  },
  area: {
    backgroundColor: 'black',
    height: '100%',
    alignSelf: 'auto'
  },
  titleMovie: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  infoPart: {
    maxWidth: 200,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  infoTextView: {
    padding: 15
  },
  infoText: {
    color: 'gray'
  },
  ratingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ratingText: {
    color: 'gray',
    justifyContent: 'flex-end'
  }
});
