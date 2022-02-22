import React from 'react';
import {
  TouchableOpacity
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { View } from 'react-native-web';

export function BtnAdd({...rest}) {
  return (  
    <TouchableOpacity 
        style={styles.button}
        {...rest}
    >
        <AntDesign 
            name="plussquareo" 
            size={30}
            color="#fff"
        />
    </TouchableOpacity>
  );
}