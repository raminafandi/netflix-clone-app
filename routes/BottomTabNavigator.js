import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import Profile from '../screens/Profile';
import Downloads from '../screens/Downloads';
import Search from '../screens/Search';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={25} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={25} />
        )
      }
    },
    Downloads: {
      screen: Downloads,
      navigationOptions: {
        tabBarLabel: 'Downloads',
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="download" color={tintColor} size={25} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-menu" color={tintColor} size={30} />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#e91e63',
      inactiveTintColor: '#888',
      activeBackgroundColor: 'black', // iOS
      inactiveBackgroundColor: 'black', // iOS
      pressColor: 'white', // Android
      indicatorStyle: {
        // Android
        backgroundColor: 'black'
      },
      style: {
        backgroundColor: 'black' // Android
      }
    }
  }
);

export default BottomTabNavigator;
