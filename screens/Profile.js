import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Title from '../shared/Title';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profiles}></View>
      <View style={styles.sa}>
        <Title title={'Notifications'} iconName={'ios-notifications-outline'} />
        <Title title={'My List'} iconName={'md-checkmark'} />
      </View>

      <View>
        <Text>App Settings</Text>
        <Text>Account</Text>
        <Text>Help</Text>
        <Text>Privacy</Text>
        <Text>Sign Out</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  profiles: {
    marginTop: 200
  },
  sa: {
    backgroundColor: '#1b1b1b'
  }
});
