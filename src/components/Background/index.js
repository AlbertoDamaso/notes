import React from 'react';
import { View } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Background({children}) {
    
    return (
        <View
            style={styles.container}
        >
            { children }
        </View>
  );
}