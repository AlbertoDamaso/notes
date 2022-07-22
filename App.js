import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import AuthProvider from './src/contexts/auth';

// console.disableYellowBox=true;

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}