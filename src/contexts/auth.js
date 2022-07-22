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

    async function signIn(){//Arrumar o login, ta quase, olhar com calma.
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log(provider)
        await firebase.auth().signInWithPopup(provider)
        .then(async (value) =>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                console.log("deu certo")
                let data = {
                    uid: uid,
                    name: snapshot.displayName,
                    avatar: snapshot.photoURL
                };
                setUser(data);
            })
        })
        .catch((error) => {
            alert(error.code);
            console.log("deu errado")
        })
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