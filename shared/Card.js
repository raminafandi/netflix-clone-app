import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    borderColor: 'black',
    elevation: 3,
    backgroundColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 160,
    height: 250
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
