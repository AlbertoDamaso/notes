import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';

const AppDrawer = createDrawerNavigator();

export function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={ (props) => <CustomDrawer {...props}/> }

      drawerStyle={{
        backgroundColor: '#fff',
      }}

      drawerContentOptions={{
        labelStyle:{
          frontWeight: 'bold',
        },
        activeTintColor: '#000',
        activeBackgroundColor: '#F58966',
        inactiveBackgroundColor: '#fff',
        inactiveTintColor: '#DDD',
        itemStyle: {
          marginVertical: 5,
        }
      }}
    >
      <AppDrawer.Screen name="Home" component={Home}/>

    </AppDrawer.Navigator>
  );
}