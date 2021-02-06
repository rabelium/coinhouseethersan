import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import options from './options/header.options';

import ScannerScene from '../scene/Scanner';
import TransactionDetailsScene from '../scene/TransactionDetails';

const SettingsStack = createStackNavigator();

function AppNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Scanner"
        component={ScannerScene}
        options={{...options, title: 'QRScanner'}}
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
