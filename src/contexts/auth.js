import React, { useState, createContext, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import firebase from '../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const navigation = useNavigation();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(()=>{
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user')

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }            
            setLoading(false)
        }
        loadStorage()
    }, [])

    async function signIn(){//Para o Gov.br
        const RESPONSE_TYPE = 'code';
        const CLIENT_ID  = '1085366517440-05i6nj11i5uql98ik3nema2nuhninldg.apps.googleusercontent.com';
        const SCOPE = encodeURI('profile email');
        const REDIRECT_URI = 'https://auth.expo.io/@albertodamaso21/notes';
        const NONCE = '';
        const STATE = '';
        const CODE_CHALLENGE = '';
        const CODE_CHALLENGE_METHOD=''


        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

        const {type, params} = await AuthSession
        .startAsync({ authUrl });
        
        if (type === 'success'){
            navigation.navigate('Home', { token: params.access_token });
        }
    }

    async function signIn(){//Do Google
        const CLIENT_ID  = '1085366517440-05i6nj11i5uql98ik3nema2nuhninldg.apps.googleusercontent.com';
        const REDIRECT_URI = 'https://auth.expo.io/@albertodamaso21/notes';
        const RESPONSE_TYPE = 'token';
        const SCOPE = encodeURI('profile email');

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

        const {type, params} = await AuthSession
        .startAsync({ authUrl });
        
        if (type === 'success'){
            navigation.navigate('Home', { token: params.access_token });
        }

        
    }


    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))        
    }
    
    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
            .then( ()=> {
                setUser(null);
            })
    }
    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;