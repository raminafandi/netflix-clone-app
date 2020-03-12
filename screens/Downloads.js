import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Title from '../shared/Title';
export default function Downloads() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title title="My Downloads" />
      </View>
      <View style={styles.circle}>
        <AntDesign name="download" style={styles.downloadIcon} size={75} />
      </View>
      <View style={styles.infoView}>
        <Text style={styles.info}>
          Movies and TV Shows that you download appear here.
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>FIND SOMETHING TO DOWNLOAD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b'
  },
  header: {
    paddingTop: 24,
    backgroundColor: 'black'
  },
  circle: {
    marginTop: 10,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    backgroundColor: '#696464',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  infoView: {
    padding: 18,
    marginTop: 20
  },
  info: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  btn: {
    marginTop: 40,
    borderWidth: 2,
    borderColor: 'white',
    padding: 17
  },
  btnText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white'
  },
  downloadIcon: {}
});
