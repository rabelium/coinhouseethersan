import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import options from './options/header.options';

import HomeScene from '../scene/Home';
import TransactionDetailsScene from '../scene/TransactionDetails';

const SettingsStack = createStackNavigator();

function AppNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="App"
        component={HomeScene}
        options={{...options, title: 'Coinhouse Ethersan'}}
      />
      <SettingsStack.Screen
        name="Details"
        component={TransactionDetailsScene}
        options={{...options, title: 'Transaction Details'}}
      />
    </SettingsStack.Navigator>
  );
}

export default AppNavigator;
