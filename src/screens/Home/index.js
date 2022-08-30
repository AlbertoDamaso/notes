import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, 
  Text,
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





export function Home({ route }) {
  const navigation = useNavigation();
  const [profile, setProfile] = useState();

  const { token } = route.params;
  console.log(token);

  function handleDelete(){
  
  }
  
  function handleNewTask(){
    navigation.navigate('Modal')
  }
  
  const [tarefas, setTarefas] = useState([
    {key: '1', assunto: "Aprenda Fluxo UI", tempo: 2},
    {key: '2', assunto: "Se increver no valdo sujei...", tempo: 3},
    {key: '3', assunto: "Treinar inteface no figma", tempo: 6},
  ]);

  async function loadProfile(){
    const response = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
    //const userInfo = await response.json();

    console.log("####DADOS DO USER####")
    console.log(response);
  }

  useEffect(() => {
    loadProfile();
  }, [])

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