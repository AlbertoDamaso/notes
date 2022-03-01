import React, { useState, useContext } from 'react';

import google from '../../assets/GoogleImg.png'

import { AuthContext } from '../../contexts/auth';
import { Background } from '../../components/Background';
import { BtnGoogle } from '../../components/BtnGoogle';
import { Logo } from '../../components/Logo';

export function SignIn() {
  const result = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleGoogle(){
    signIn(result);

    if(result){
      console.log('funfou')
    }else{
      alert('Error');
    }
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