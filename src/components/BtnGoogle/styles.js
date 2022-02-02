import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  submitButton: {
    width: '60%',
    height: 45,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row'
  },

  imageButton: {
    alignSelf: 'flex-start',
  },

  textButton: {
    fontSize: 20,
    alignSelf: 'center',
  }
});