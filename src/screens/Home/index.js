import React, { useState } from 'react';
import {
  View, 
  Text,
  FlatList
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { ImgProfile } from '../../components/ImgProfile';
import { Item } from '../../components/Item';
import { styles } from './styles';




function handleDelete(){

}

export function Home() {
  const [tarefas, setTarefas] = useState([
    {key: '1', assunto: "Aprenda Fluxo UI", tempo: 2},
    {key: '2', assunto: "Se increver no valdo sujei...", tempo: 3},
    {key: '3', assunto: "Treinar inteface no figma", tempo: 6},
  ]);

  

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