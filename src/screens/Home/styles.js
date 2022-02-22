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
  },
  bgswipe: {
    width: '50%',
    height: 45,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 13,
    borderRadius: 8,
    backgroundColor: theme.colors.danger,
  },
  iconswipe: {
    marginVertical: 10,
    marginHorizontal: 16,
  }

});