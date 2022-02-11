import React, { useContext } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

// import { AuthContext } from '../../contexts/auth';
import { styles } from './styles';
// ALTERAR TODOS OS STYLOS PARA STYLES

export function CustomDrawer(props) {
    // const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
        <View style={styles.container}>
            <Image
              source={require('../../assets/photoperfil.png')}
              style={styles.imageProfile}
              resizeMode="cover"
            />

            <Text style={styles.title}>
               Alberto
            </Text>
            <Text style={styles.text}>
               356tarefas
            </Text>
        </View>

        <View style={styles.lineDivider} />

        <DrawerItemList {...props}/>

        <DrawerItem
            {...props}
            label="Sair"
            style={{marginHorizontal: 20}}
            labelStyle={{fontSize: 18, fontWeight: 'bold', color:"#ff7777"}}
            // onPress={ () => signOut() }
        />
    </DrawerContentScrollView>
  );
}