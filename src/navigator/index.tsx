import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@ui-kitten/components';

import AppNavigator from './app';
import ScannerNavigator from './scanner';
import {BottomNavigationComponent} from '../common/component/bottom-navigation.component';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <BottomNavigationComponent {...props} />}
        tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Lookup',
            tabBarIcon: (props) => <Icon {...props} name="ethereum" />,
          }}
          component={AppNavigator}
        />
        <Tab.Screen
          name="Scanner"
          options={{
            tabBarLabel: 'QRScan',
            tabBarIcon: (props) => <Icon {...props} name="qrcode-scan" />,
          }}
          component={ScannerNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
