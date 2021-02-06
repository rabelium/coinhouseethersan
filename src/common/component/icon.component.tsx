import React from 'react';
import {StyleSheet} from 'react-native';
import BaseIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../assets/style/metrics';

const DEFAULT_ICON_STYLE = {
  height: metrics.icons.medium,
};

export const IconsPack = {
  name: 'material',
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy(
    {},
    {
      get(_target: any, name: string) {
        return IconProvider(name);
      },
    },
  );
}

const IconProvider = (name: string) => ({
  toReactElement: (props?: any) => Icon({name, ...props}),
});

function Icon({name, style = DEFAULT_ICON_STYLE}: {name: string; style?: any}) {
  const {height, tintColor, ...iconStyle} = StyleSheet.flatten(style);
  return (
    <BaseIcon name={name} size={height} color={tintColor} style={iconStyle} />
  );
}
