import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScene from '../scene/Home';

const SettingsStack = createStackNavigator();

function HomeNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Home" component={HomeScene} />
    </SettingsStack.Navigator>
  );
}

export default HomeNavigator;
