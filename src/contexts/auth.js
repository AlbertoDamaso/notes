import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})

function AuthProvider({ children }){
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

    //Funcao para logar o usuario
    async function signIn(){
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
    
    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;