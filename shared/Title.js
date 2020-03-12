import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Card(props) {
  return (
    <View style={styles.listTitleView}>
      <Text style={styles.listTitle}>{props.title}</Text>
      <Ionicons
        style={styles.listIcon2}
        name={props.iconName}
        color="white"
        size={25}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  listTitleView: {
    borderBottomWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  listIcon2: {
    alignSelf: 'flex-end'
  }
});
