import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  submitButton: {
    width: '60%',
    height: 45,
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    borderRadius: 25,
  },

  imageButton: {
    marginRight: 35,
    marginLeft: -3,
  },

  textButton: {
    fontSize: 20,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
  }
});