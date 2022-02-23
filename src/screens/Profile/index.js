import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { ImgProfile } from '../../components/ImgProfile';
import { Button } from '../../components/Button';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
          <ImgProfile/>

          <Text style={styles.title}>
              Alberto
          </Text>
          <Text style={styles.text}>
              356tarefas / 300concluidas
          </Text>
      </View>

      <View style={styles.areaBtn}>
        <Button title={'CADASTRAR TAREFA'}/>
        <View style={styles.btnsair}>
          <Button title={'SAIR'}/> 
        </View>  
      </View>
    </View>
  );
}