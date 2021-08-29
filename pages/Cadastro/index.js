import React, { useState , useEffect } from 'react';
import { Text, View, TouchableOpacity , TextInput, Alert } from 'react-native';
import styles from './style';
import { Entypo , AntDesign , Feather } from '@expo/vector-icons';
import FormTextField from '../../components/form/TextField';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({navigation}) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleBackPress = () => {
    navigation.navigate("Termos");
  }

  const storeData = async () => {
    if (!name || !lastname || !email || !password) {
      Alert.alert("Preencha todos os campos");
    } else {
      try {
        console.log(name);
        const jsonValue = JSON.stringify({name: name, lastname: lastname, email: email, password: password})
        await AsyncStorage.setItem('@storage_Key', jsonValue)
        navigation.navigate('Termos');
      } catch (e) {
        console.log('erro')
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome</Text>
      <TextInput style={styles.textInput} onChangeText={(text) => setName(text)}/>
      <Text style={styles.text}>Sobrenome</Text>
      <TextInput style={styles.textInput} onChangeText={(text) => setLastname(text)}/>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.textInput} onChangeText={(text) => setEmail(text)}/>
      <Text style={styles.text}>Senha</Text>
      <View style={[styles.textInput, {alignItems: 'center', flexDirection: 'row'}]}>
        <TextInput style={{width: '90%'}} secureTextEntry={!visible} onChangeText={(text) => setPassword(text)}></TextInput>
        <TouchableOpacity onPress={()=>{setVisible(!visible)}}>
            <Entypo name={visible?"eye":"eye-with-line"} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={storeData} style={styles.roundButton1}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}