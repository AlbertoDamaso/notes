import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Background } from '../../components/Background';

import { styles } from './styles';

export function SignIn() {
  return (
    <Background>
        <Text style={{fontSize:50, alignSelf: 'center'}}>
            Olá, Notes!!!
        </Text>
    </Background>
  );
}