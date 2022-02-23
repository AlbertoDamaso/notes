import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  submitButton: {
    width: '60%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 25,
  },

  textButton: {
    fontSize: 20,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
  }
});