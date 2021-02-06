import {View} from 'react-native';
import React, {useRef} from 'react';
import EthereumAddress from 'ethereum-address';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  Button,
  Icon,
  Layout,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';

import style from './style';
import EtherscanApi from '../../common/builder/scanner';

function ScannerScene({navigation}) {
  const [address, setAddress] = React.useState('');
  const [data, setData] = React.useState([]);
  const scanner = useRef(null);
  const onSuccess = (result: any) => {
    if (EthereumAddress.isAddress(result)) {
      setAddress(result);
    }
  };

  const process = async (value: string) => {
    if (EthereumAddress.isAddress(value)) {
      EtherscanApi;
      EtherscanApi.account
        .txlist(value, 1, 'latest', 1, 100, 'desc')
        .then(({result}: {result: []}) => setData(result));
    }
  };

  const renderItemIcon = (item: any) => (props: any) => {
    const name =
      item.to === address ? 'account-arrow-left' : 'account-arrow-right';
    return <Icon {...props} name={name} />;
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const description =
      item.to === address ? `From :${item.from}` : `To :${item.to}`;
    const title = `${parseInt(item.value, 10)} ETH`;
    return (
      <ListItem
        key={index}
        onPress={() => {
          navigation.navigate('Details', {item});
        }}
        title={title}
        description={description}
        accessoryLeft={renderItemIcon(item)}
      />
    );
  };
  return (
    <Layout style={style.container}>
      {data.length === 0 && (
        <QRCodeScanner
          ref={scanner}
          reactivate={true}
          showMarker={true}
          containerStyle={style.container}
          cameraStyle={style.camera}
          topViewStyle={style.topView}
          bottomViewStyle={style.bottomView}
          onRead={onSuccess}
          bottomContent={
            <>
              {address.length > 0 && <Text>{`Address: ${address}`}</Text>}
              <View style={style.actions}>
                <Button
                  disabled={address.length > 0}
                  style={style.button}
                  onPress={() => {
                    scanner?.current.reactivate();
                  }}>
                  Re:Scan
                </Button>
                <Button
                  disabled={address.length === 0}
                  style={style.button}
                  onPress={() => process(address)}>
                  Lookup
                </Button>
              </View>
            </>
          }
        />
      )}
      {data.length > 0 && (
        <>
          <Button
            style={style.button}
            onPress={() => {
              setData([]);
            }}>
            Re:Scan
          </Button>
          <Text
            category="h6"
            style={
              style.listTitle
            }>{`${data.length} MOST RECENT TRANSACTIONS`}</Text>
          <List style={style.list} data={data} renderItem={renderItem} />
        </>
      )}
    </Layout>
  );
}

export default ScannerScene;
