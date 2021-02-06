import React from 'react';
import {
  Input,
  Layout,
  Button,
  List,
  ListItem,
  Icon,
  Text,
} from '@ui-kitten/components';
import {View} from 'react-native';
import EthereumAddress from 'ethereum-address';

import style from './style';
import EtherscanApi from '../../common/builder/scanner';

function HomeScene({navigation}) {
  const [address, setAddress] = React.useState(
    '0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91',
  );
  const [data, setData] = React.useState([]);
  const [status, setStatus] = React.useState('basic');

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

  const process = async (value: string) => {
    if (EthereumAddress.isAddress(value)) {
      EtherscanApi;
      EtherscanApi.account
        .txlist(value, 1, 'latest', 1, 100, 'desc')
        .then(({result}: {result: []}) => setData(result));
    } else {
      setStatus('danger');
    }
  };

  return (
    <Layout style={style.container}>
      <View style={style.wrapper}>
        <Input
          label="Please enter a valid ethereum address"
          placeholder="Ex: 0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91"
          value={address}
          status={status}
          onChangeText={(nextValue) => {
            setAddress(nextValue);
            setStatus('basic');
          }}
        />
        <Button
          disabled={address.length === 0}
          style={style.button}
          onPress={() => process(address)}>
          Lookup
        </Button>
      </View>
      {data.length > 0 && (
        <>
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

export default HomeScene;
