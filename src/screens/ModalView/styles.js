import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    width: '95%',
    height: 450,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 100,
    borderRadius: 6,
    backgroundColor: theme.colors.lightMais1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  contentTitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 2
  },
  areaTitle:{
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },  
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.title,
    color: '#000',
  },
  areaInput: {
    width: '90%',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    marginTop: 5,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    textAlignVertical: 'top',
    paddingTop: 16,
    paddingHorizontal: 16
  },
  inputDesc: {
    width: '100%',
    height: 99,
    alignItems: 'center',
    marginTop: 5,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    textAlignVertical: 'top',
    paddingTop: 16,
    paddingHorizontal: 16
  },
  inputData: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    marginTop: 5,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    textAlignVertical: 'top',
    paddingTop: 16,
    paddingHorizontal: 16
  }
});