import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import QRCodeScanner from 'react-native-qrcode-scanner';

import style from './style';

function ScannerScene() {
  const onSuccess = (result: any) => {
    console.log('result', result);
  };
  return (
    <Layout style={style.container}>
      <QRCodeScanner
        reactivate={true}
        showMarker={true}
        onRead={onSuccess}
        topContent={<Text category="h2">Scan</Text>}
        bottomContent={<></>}
      />
    </Layout>
  );
}

export default ScannerScene;
