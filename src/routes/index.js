import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';


export function Routes() {
    // const { signed, loading } = useContext(AuthContext);
    // if(loading){
    //     return (
    //         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //             <ActivityIndicator size='large' color='#141414'/>
    //         </View>
    //     )  
    // }

    // return(
    //     signed ? <AppRoutes/> : <AuthRoutes/>
    // )

    //Provisorio:
    return(
        <AuthRoutes/>
    )
}