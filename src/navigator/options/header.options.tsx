import React from 'react';
import {Text} from '@ui-kitten/components';

export default {
  headerStyle: {
    backgroundColor: '#121212',
  },
  headerTitle: (props?: any) => <Text category="h6" {...props} />,
};
