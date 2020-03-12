import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Title from '../shared/Title';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profiles}></View>
      <View style={styles.menu}>
        <View style={styles.mainMenu}>
          <Title
            title={'Notifications'}
            iconName={'ios-notifications-outline'}
          />
          <Title title={'My List'} iconName={'md-checkmark'} />
        </View>

        <View style={styles.secondaryMenu}>
          <View style={styles.secMenuItem}>
            <Text style={styles.secMenuText}>App Settings</Text>
          </View>
          <View style={styles.secMenuItem}>
            <Text style={styles.secMenuText}>Account</Text>
          </View>

          <View style={styles.secMenuItem}>
            <Text style={styles.secMenuText}>Help</Text>
          </View>

          <View style={styles.secMenuItem}>
            <Text style={styles.secMenuText}>Privacy</Text>
          </View>

          <View style={styles.secMenuItem}>
            <Text style={styles.secMenuText}>Sign Out</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%'
  },
  profiles: {
    height: '35%',
    backgroundColor: 'black'
  },
  menu: {
    height: '65%',
    backgroundColor: '#1b1b1b'
  },
  secondaryMenu: {},
  secMenuItem: {
    padding: 10,
    paddingHorizontal: 16
  },
  secMenuText: {
    fontSize: 17,
    color: 'white'
  }
});
