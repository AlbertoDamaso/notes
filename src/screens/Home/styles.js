import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 40,
  },
  areaProfile: {    
    width: '90%',
    height: 118,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 236,
  },
  areaTarefas: {
    width: '90%',   
    alignSelf: 'center',     
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 25,
    marginBottom: 20,
  }

});