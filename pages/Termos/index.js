import React, {useState} from 'react';
import { Text, View, TouchableOpacity , TextInput, Alert } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';

function CheckBox() {
    const [ligado, setLigado] = useState(false);

    return (
        <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
            <TouchableOpacity style={{marginHorizontal: '5%', marginTop: 20}} onPress={()=>{setLigado(!ligado)}}>
                <Fontisto name={ligado?"checkbox-active":"checkbox-passive"} size={20} color="green" />
            </TouchableOpacity>
            <Text style={{alignSelf: 'flex-end'}}>Li e concordo</Text>
        </View>
    )
}

export default function App({navigation}) {

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
          const cliente = JSON.parse(jsonValue)
    
          if(cliente) {
            fetch('http://192.168.1.105:8080/cliente/cadastro', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: cliente.name,
              lastname: cliente.lastname,
              email: cliente.email,
              password: cliente.password
            })
            })
            .then(response => response.text())
            .then(data=> {
              console.log(data);
            })
    
            navigation.navigate('Categorias')
          }
        } catch(e) {
          console.log(await AsyncStorage.getItem('@storage_Key'))
        }
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.terms}>

            </View>
            
            <CheckBox/>

            <TouchableOpacity onPress={getData} style={styles.roundButton1}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )

}