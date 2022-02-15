import React from 'react';
import { Image } from 'react-native';

import imgProfile from '../../assets/photoperfil.png';

import { styles } from './styles';

export function ImgProfile({...rest}) {
  return (
    <Image
        source={imgProfile}
        style={styles.imageProfile}
        resizeMode="cover"
        {...rest}
    />

  );
}