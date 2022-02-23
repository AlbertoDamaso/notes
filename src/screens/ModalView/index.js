import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  TouchableWithoutFeedback as TWF,
  Modal,
  View,
  Text,
  TextInput
} from 'react-native';

import { InputDate } from '../../components/InputDate';
import { Button } from '../../components/Button';
import { styles } from './styles';

export function ModalView() {
  return (
    <Modal 
      transparent={true}
      animationType="slide"
      statusBarTranslucent
      visible={true}
    >
      <TWF onPress={ () => closeModal()}>
        <View style={styles.overlay}>
          <View style={styles.contentTitle}>
            <Feather
              name="arrow-left"
              size={31}
              color="#000"
            />
            <View style={styles.areaTitle}> 
              <Text style={styles.title}>
                Nova tarefa
              </Text>
            </View>
          </View>

          <View style={styles.areaInput}>
            <Text style={styles.title}>Nome da tarefa</Text>
            <TextInput 
              placeholder='Nome da sua tarefa'
              placeholderTextColor="#B7B7B7"
              style={styles.input}                 
            />
          </View>

          <View style={styles.areaInput}>
            <Text style={styles.title}>Descrição</Text>
            <TextInput 
              placeholder='Descreva sua tarefa...'
              placeholderTextColor="#B7B7B7"
              style={styles.inputDesc}                 
            />
          </View>

          <View style={styles.areaInput}>
            <Text style={styles.title}>Data de entrega</Text>
            <InputDate
              // date={dateN}
              display="default"
              mode="date"
              placeholder="Selecione uma data"
              format="DD/MM/YYYY"
              minDate="01-01-1922"
              maxDate="01-01-2050"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              // onDateChange={(date) => setDateN(date)}
            />
            
          </View>

          <Button title={"CADASTRAR"}/>
        </View>
      </TWF>
    </Modal>
  );
}