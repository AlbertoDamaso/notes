import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: 48,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.light,
    backgroundColor: theme.colors.light,
    flexDirection: 'row',
  },
  contentAssunto: {
    width: '85%',
  },
  text: {
    fontSize: 15,
    paddingHorizontal: 10,
    fontFamily: theme.fonts.text,
    color: theme.colors.dark,
  },
});