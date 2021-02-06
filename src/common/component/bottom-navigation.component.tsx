import React from 'react';
import {
  TabNavigationState,
  ParamListBase,
  Route,
} from '@react-navigation/native';
import {Platform} from 'react-native';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationHelpers,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

import style from './style/bottom-navigation.style';

const getPaddingBottom = (insets: EdgeInsets) =>
  Math.max(
    insets.bottom -
      Platform.select({
        ios: 4,
        default: 0,
      }),
    0,
  );

export const BottomNavigationComponent = ({
  navigation,
  descriptors,
  state,
}: {
  navigation: BottomTabNavigationHelpers;
  descriptors: BottomTabDescriptorMap;
  state: TabNavigationState<ParamListBase>;
}) => {
  const insets = useSafeAreaInsets();
  const paddingBottom = getPaddingBottom(insets);
  return (
    <BottomNavigation
      selectedIndex={state.index}
      style={[{paddingBottom}, style.container]}
      onSelect={(index) => {
        const route = state.routes[index];
        const event = navigation.emit({
          type: 'tabPress',
          target: route.name,
          canPreventDefault: true,
        });
        const isFocused = state.index === index;
        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      }}>
      {state.routes.map((route: Route<string>) => {
        const {options} = descriptors[route.key];
        const {tabBarIcon, tabBarLabel} = options;
        const title: string = `${tabBarLabel || options.title || route.name}`;
        return (
          <BottomNavigationTab
            key={route.key}
            title={title}
            icon={tabBarIcon}
          />
        );
      })}
    </BottomNavigation>
  );
};
