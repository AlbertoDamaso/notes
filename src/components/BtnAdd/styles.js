import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
button: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 8,
    backgroundColor: theme.colors.primary, 
  }
});