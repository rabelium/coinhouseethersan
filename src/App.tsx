import React from 'react';
import * as eva from '@eva-design/eva';
import {Appearance} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

import Navigator from './navigator';
import StateComponent from './common/component/state.component';
import {IconsPack} from './common/component/icon.component';

declare const global: {HermesInternal: null | {}};
type ColorScheme = 'light' | 'dark';

const App = () => {
  const colorScheme: ColorScheme = 'dark'; //Appearance.getColorScheme() || 'light';

  return (
    <StateComponent>
      <IconRegistry icons={IconsPack} />
      <ApplicationProvider {...eva} theme={eva[colorScheme]}>
        <Navigator />
      </ApplicationProvider>
    </StateComponent>
  );
};

export default App;
