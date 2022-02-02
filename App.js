import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Montserrat_Regular, Montserrat_Bold } from '@expo-google-fonts/montserrat';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';

// console.disableYellowBox=true;

export default function App() {
  // const [fontsLoaded, error] = useFonts({
  //   Montserrat_Regular,
  //   Montserrat_Bold,
  // });

  // if(!fontsLoaded){
  //   return <AppLoading/>
  // }else{
  //   error = "Problemas de Fonte!"
  //   console.log(error)
  // }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
    </NavigationContainer>
  );
}