import {mapValues} from 'lodash';

import resetter from './resetter';
import ActionInterface from '../../interface/action.interface';
import ReducerSettingInterface from '../../interface/reducer-settings.interface';

const UpdaterGenerator = (context: string, name: string, defaultValue: any) => (
  value: any,
) => {
  const action: ActionInterface = {
    type: `${context.toUpperCase()}_${name.toUpperCase()}`,
  };
  action[name] = value || defaultValue;

  return action;
};

export const UpdatersGenerator = (
  context: string,
  reducers: Map<string, ReducerSettingInterface>,
) => ({
  ...mapValues(reducers, (config: ReducerSettingInterface, name: string) =>
    UpdaterGenerator(context, name, config.default),
  ),
  reset: resetter(context),
});
