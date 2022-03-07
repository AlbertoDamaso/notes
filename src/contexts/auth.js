import React, { useState, createContext, useEffect } from 'react';
// import firebase from '../services/firebaseConnection';
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
    // async function signIn(){
    //     setLoading(true)
    //     await new firebase.auth().GoogleAuthProvider()
    //     await firebase.auth().signInWithPopup()
    //     .then(async (value) =>{
    //         alert('Usuario criado: ' + value.user.email);
    //         let uid = value.user.uid;
    //         await firebase.database().ref('users').child(uid).set({                
    //             nome: value.user.displayName,
    //             ntarefa: task,
    //             desc: desc,
    //             dtentrega: dateIn
    //         })
    //         .then(()=>{
    //             let data = {
    //                 uid: uid,
    //                 nome: value.user.displayName,
    //                 email: value.user.email,
    //             };
    //             setUser(data);
    //             storageUser(data);
    //             setLoadingAuth(false);
    //         })
    //     })
    //     .catch((error) => {
    //         alert(error.code);
    //         setLoadingAuth(false);
    //     })
    // }

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