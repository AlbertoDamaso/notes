import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, 
  Text,
  FlatList,
  TouchableWithoutFeedback as TWF,
  TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';

import { Background } from '../../components/Background';
import { ImgProfile } from '../../components/ImgProfile';
import { BtnAdd } from '../../components/BtnAdd';
import { Item } from '../../components/Item';
import { styles } from './styles';




function handleDelete(){

}

function handleNewTask(){
  navigation.navigate('Modal')
}

export function Home() {
  const [tarefas, setTarefas] = useState([
    {key: '1', assunto: "Aprenda Fluxo UI", tempo: 2},
    {key: '2', assunto: "Se increver no valdo sujei...", tempo: 3},
    {key: '3', assunto: "Treinar inteface no figma", tempo: 6},
  ]);

  const navigation = useNavigation();

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.areaProfile}>

          <TWF onPress={ () => navigation.toggleDrawer() }>
            <ImgProfile/>
          </TWF>

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

          <SwipeListView
            data={tarefas}
            keyExtractor={ item => item.key}
            renderItem={ ({item}) =>  (
              <Item data={item}/> 
            )}
            renderHiddenItem={ ({item}) => (
              <View style={styles.bgswipe}>
                <TouchableOpacity onPress={handleDelete}>
                  <Feather 
                    name="trash-2"
                    size={24}
                    color="#fff"   
                    style={styles.iconswipe}             
                  />
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-55}
          />

        </View>

        <BtnAdd onPress={handleNewTask}/>

      </View>
    </Background>
  );
}