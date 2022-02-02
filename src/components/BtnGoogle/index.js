import React, { useContext } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Image,
} from 'react-native';

// import { AuthContext } from '../../contexts/auth';
import { styles } from './styles';

export function BtnGoogle({ title, imagem, ...rest}) {
//   const { loadingAuth } = useContext(AuthContext);
    
  return (
    <TouchableOpacity
        style={styles.submitButton}
        {...rest}
    >
        <Image
            source={imagem}
            style={styles.imageButton}
        />

        <Text style={styles.textButton}>
            { title }
        </Text>
        {/* {
            loadingAuth ? (
                <ActivityIndicator size={20} color="#141414"/>
                ) : (
                <Text style={styles.textButton}>
                    { title }
                </Text>
            )
        }         */}
    </TouchableOpacity>
  );
}