import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.light,
    backgroundColor: theme.colors.light,
  },
  textAssunto: {
      fontFamily: theme.fonts.text,
      color: theme.colors.dark,
      fontSize: 15,
  }
});