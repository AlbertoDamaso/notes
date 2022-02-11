import React from 'react';
import {
  View,
  Text
} from 'react-native';

import google from '../../assets/GoogleImg.png'

import { Background } from '../../components/Background';
import { BtnGoogle } from '../../components/BtnGoogle';
import { Logo } from '../../components/Logo';
import { styles } from './styles';

export function SignIn() {
  return (
    <Background>
        <View style={styles.body}>
          <Logo/>

          <BtnGoogle
            source={google}
            title={"ENTRAR"}
            activeOpacity={0.7}
          />
        </View>
    </Background>
  );
}