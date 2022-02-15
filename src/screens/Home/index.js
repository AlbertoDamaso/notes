import React, { useState } from 'react';
import {
  View, 
  Text,
  FlatList
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { ImgProfile } from '../../components/ImgProfile';
import { ListTarefas } from '../../components/Item';
import { styles } from './styles';

function handleDelete(){

}

export function Home() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.areaProfile}>

          <ImgProfile/>

          <Feather
            name="bell"
            size={30}
            color="#222"
            style={styles.icon}
          />

        </View>          

        <View style={styles.areaTarefas}>
          <Text style={styles.title}>
            Minhas tarefas
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={tarefas}
            keyExtractor={ item => item.key}
            renderItem={ ({ item }) => ( <Item data={item} deleteItem={handleDelete} /> )}
          />

        </View>
      </View>
    </Background>
  );
}