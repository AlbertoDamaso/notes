import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { ModalView } from '../screens/ModalView';

const AuthStack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name='SignIn'
        component={SignIn}
        options={{headerShown: false}}
      />   
      <AuthStack.Screen
        name='Modal'
        component={ModalView}
        options={{headerShown: false}}
      />      
    </AuthStack.Navigator> 
  );
}