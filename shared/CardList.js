import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import Card from '../shared/Card';

export default function CardList(props) {
  return (
    <FlatList
      horizontal
      data={props.data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('MovieDetails', item);
          }}>
          <Card>
            <Image
              style={{ width: 140, height: 220, borderRadius: 4 }}
              source={{ uri: item.imageUrl }}
            />
            <View style={styles.titleView}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  titleView: {
    height: '20%'
  },
  titleText: {
    color: 'white',
    textAlign: 'center'
  }
});
