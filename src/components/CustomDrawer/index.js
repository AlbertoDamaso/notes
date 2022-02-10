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
    const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
            <Image
                source={require('../../assets/logo.png')}
                style={{width: 85, height: 85}}
                resizeMode="contain"
            />

            <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
               Alberto
            </Text>
            <Text style={{color: '#F58966', fontSize: 18, paddingBottom: 25}}>
               356tarefas
            </Text>
        </View>

        <DrawerItemList {...props}/>

        <DrawerItem
            {...props}
            label="Sair do app"
            // onPress={ () => signOut() }
        />
    </DrawerContentScrollView>
  );
}