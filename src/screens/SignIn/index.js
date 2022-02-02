import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { BtnGoogle } from '../../components/BtnGoogle';
import google from '../../assets/GoogleImg.png'
import { styles } from './styles';

export function SignIn() {
  return (
    <Background>
        <View style={styles.body}>
          <Logo/>

          <BtnGoogle
            
          />
        </View>
    </Background>
  );
}