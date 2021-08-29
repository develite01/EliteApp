import React, { useState , useEffect } from 'react';
import { Text, View, TouchableOpacity , TextInput, Alert } from 'react-native';
import styles from './style';
import { Entypo , AntDesign , Feather } from '@expo/vector-icons';
import FormTextField from '../../components/form/TextField';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({navigation}) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [token, setToken] = useState(null);

  const handleBackPress = () => {
    navigation.navigate("Termos");
  }

  const verifyData = async () => {
    fetch('http://192.168.1.105:8080/cliente/login', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
            })
            .then(response => response.json())
            .then(data=> {
              setToken(data.token);
            })
  }

  const isAuth = async () => {
    fetch('http://192.168.1.105:8080/cliente/isAuth', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    })
    .then(response => response.text())
    .then(data=> {
      console.log(data);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.textInput} onChangeText={(text) => setEmail(text)}/>
      <Text style={styles.text}>Senha</Text>
      <View style={[styles.textInput, {alignItems: 'center', flexDirection: 'row'}]}>
        <TextInput style={{width: '90%'}} secureTextEntry={!visible} onChangeText={(text) => setPassword(text)}></TextInput>
        <TouchableOpacity onPress={()=>{setVisible(!visible)}}>
            <Entypo name={visible?"eye":"eye-with-line"} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={verifyData} style={styles.roundButton1}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={isAuth} style={styles.roundButton1}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Verificar</Text>
      </TouchableOpacity>
    </View>
  );
}