import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 118,
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingBottom: 16,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    elevation: 3,
  },
  icon: {
    marginHorizontal: 20,
  },
  areaTitle:{
    width: '70%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: theme.colors.dark,
    fontFamily: theme.fonts.title,
  },
  body: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  titleBody: {
    fontSize: 25,
    color: theme.colors.dark,
    fontFamily: theme.fonts.title,
  },
  text: {
    marginTop: 20, 
    fontSize: 15,
    fontFamily: theme.fonts.text,
  },
  footer: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  btnExcluir: {
    width: '70%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  titleBtn: {
    fontSize: 20,
    color: theme.colors.danger,
    fontFamily: theme.fonts.title,
  },
  iconBtn: {
    marginHorizontal: 5,
  }
});