import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  body: {
    justifyContent:'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.dark,
    fontFamily: theme.fonts.title,
    fontSize: 25,
  },
  text: {
    color: theme.colors.secundary,
    fontFamily: theme.fonts.title,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 25,
  },
  areaBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnsair: {
    marginTop: 10,
  }
});