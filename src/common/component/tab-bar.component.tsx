import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

import {dimensions} from '../../assets/style/metrics';
import style from './style/tab-bar.style';

const DEFAULT_TABBAR_HEIGHT = 49;
const COMPACT_TABBAR_HEIGHT = 32;

const getPaddingBottom = (insets: EdgeInsets) =>
  Math.max(
    insets.bottom -
      Platform.select({
        ios: 4,
        default: 0,
      }),
    0,
  );

const getTabBarHeight = (insets: EdgeInsets) => {
  const isLandscape = dimensions.width > dimensions.height;
  const paddingBottom = getPaddingBottom(insets);

  if (Platform.OS === 'ios' && !Platform.isPad && isLandscape) {
    return COMPACT_TABBAR_HEIGHT + paddingBottom;
  }

  return DEFAULT_TABBAR_HEIGHT + paddingBottom;
};

const TabBar = ({
  state,
  navigation,
  descriptors,
  activeBackgroundColor,
  activeTintColor,
  adaptive,
  allowFontScaling,
  inactiveBackgroundColor,
  inactiveTintColor,
  keyboardHidesTabBar = false,
  labelPosition,
  labelStyle,
  iconStyle,
  safeAreaInsets,
  showLabel,
  tabStyle,
}) => {
  console.log('props', {
    state,
    navigation,
    descriptors,
    activeBackgroundColor,
    activeTintColor,
    adaptive,
    allowFontScaling,
    inactiveBackgroundColor,
    inactiveTintColor,
    keyboardHidesTabBar,
    labelPosition,
    labelStyle,
    iconStyle,
    safeAreaInsets,
    showLabel,
    tabStyle,
  });

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const insets = useSafeAreaInsets();
  const height = getTabBarHeight(insets);
  const paddingBottom = getPaddingBottom(insets);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[style.container, {height, paddingBottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
