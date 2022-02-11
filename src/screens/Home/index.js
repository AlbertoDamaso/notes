import React from 'react';

import {
  View, 
  Text
} from 'react-native';
import { Background } from '../../components/Background';

import { styles } from './styles';

export function Home() {
  return (
    <Background>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Olá, tarefa
        </Text>
      </View>
    </Background>
  );
}