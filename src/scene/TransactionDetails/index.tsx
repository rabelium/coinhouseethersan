import React from 'react';
import {Layout, List, ListItem, Icon, Text} from '@ui-kitten/components';
import {map} from 'lodash';

import style from './style';

export default ({route}) => {
  const {params} = route;
  const {item} = params;
  const data = map(item, (description: string, title: string) => ({
    title,
    description,
  }));

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <ListItem key={index} title={item.title} description={item.description} />
    );
  };

  return (
    <Layout style={style.container}>
      <List style={style.list} data={data} renderItem={renderItem} />
    </Layout>
  );
};
