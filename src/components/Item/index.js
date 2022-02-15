import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

const data =[
    {key: 1, assunto: "Aprenda Fluxo UI", tempo: 2},
    {key: 2, assunto: "Se increver no valdo sujei...", tempo: 3},
    {key: 3, assunto: "Treinar inteface no figma", tempo: 6},
]

export function Item({data}) {
  return (
    <View style={styles.container}>
        <Text style={styles.textAssunto}>{data.assunto}</Text>
        <Text style={styles.textTempo}> {data.tempo}d </Text>
    </View>
  );
}