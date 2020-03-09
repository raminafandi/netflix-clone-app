import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: BottomTabNavigator
  })
);
