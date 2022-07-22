import React, { useState, useContext } from 'react';

import { firebase, auth } from '../../services/firebaseConnection';
import google from '../../assets/GoogleImg.png'

import { AuthContext } from '../../contexts/auth';
import { Background } from '../../components/Background';
import { BtnGoogle } from '../../components/BtnGoogle';
import { Logo } from '../../components/Logo';

export function SignIn() {
  const { signIn } = useContext(AuthContext);

  function handleGoogle(){
    signIn();
  }
  

  return (
    <Background>
        <Logo/>

        <BtnGoogle
          source={google}
          title={"ENTRAR"}
          activeOpacity={0.7}
          onPress={handleGoogle}
        />
    </Background>
  );
}