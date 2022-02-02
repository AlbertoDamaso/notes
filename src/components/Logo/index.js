import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png'
import { styles } from './styles';

export function Logo() {
  return (
    <Image
        source={logo}
        style={styles.logo}
    />
  );
}