import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Button } from '../../components/Button';
import { styles } from './styles';


export function Detail() {
  function handleExcluir(){
    navigation.navigate('Home')
  }
  
  const navigation = useNavigation();

  const title= "Aprender Fluxos UI"
  const text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          size={31}
          color="#000"
          style={styles.icon}
        />
        <View style={styles.areaTitle}> 
          <Text style={styles.title}>
            Detalhes
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.titleBody}>
          {title}
        </Text>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleExcluir} 
          style={styles.btnExcluir}
        >
          <Text style={styles.titleBtn}>EXCLUIR TAREFA</Text> 
          <Feather
            name="trash-2"
            size={24}
            color="#FF2D2D"
            style={styles.iconBtn}
          /> 
        </TouchableOpacity>

        <Button title={"CONCLUIR TAREFA"}/>
      </View>
    </View>
  );
}
