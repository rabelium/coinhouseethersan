import {map, pickBy} from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

import ReducerSettingInterface from '../../interface/reducer-settings.interface';

export default (
  key: string,
  reducers: Map<string, ReducerSettingInterface>,
) => ({
  key,
  storage: AsyncStorage,
  whitelist: map(
    pickBy(reducers, 'persist'),
    (_config: ReducerSettingInterface, name: string) => name,
  ),
});
