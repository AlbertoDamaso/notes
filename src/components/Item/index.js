import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';


export function Item({data}) {
  return (
    <View style={styles.container}>
        <View style={styles.contentAssunto}>
          <Text style={styles.text}>{data.assunto}</Text>
        </View>  
        <Text style={styles.text}> {data.tempo}d </Text>
    </View>
  );
}