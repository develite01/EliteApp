import React, {useEffect} from 'react';
import { Text, View, TouchableOpacity, ImageBackground , Linking } from 'react-native';
import styles from './style';

export default function App({navigation}) {

  const jsonValue = null;

  useEffect(() => {

    (async () => {
      try {
        jsonValue = await AsyncStorage.getItem('@storage_Key')
        console.log('funcionou');
      } catch(e) {
        console.log('erro')
      }
    })

  }, []);

  const handleNextPress = () => {
    navigation.navigate("Categorias")
  }

  const handleRegisterPress = () => {
    navigation.navigate("Cadastro")
  }

  const handleRegisterCompanyPress = () => {
    Linking.openURL("http://192.168.1.105:3000/");
  }

  if(jsonValue) {
    navigation.navigate('Empresas', {category: 'Alimentos'});
  } else {

    return (

      <View style={{flex: 1}}>
  
        <ImageBackground source={require("../../assets/background.png")} style={styles.image}>
        
          <Text style={styles.text1}>Bem vindo ao Elite,{"\n"}
                                     o lugar onde você{"\n"}
                                     irá encontar empresas{"\n"}
                                     para a sua necessidade</Text>
  
          <TouchableOpacity style={styles.roundButton1} onPress={() => {navigation.navigate('Login')}}>
  
            <Text style={styles.text2}>Entrar</Text>
  
          </TouchableOpacity>

          <Text onPress={handleRegisterPress} style={[styles.text3, {marginTop: 10}]} >Não possui um cadastro?</Text>

          <TouchableOpacity style={styles.roundButton1} onPress={() => {navigation.navigate('Categorias')}}>
  
            <Text style={styles.text2}>Pular</Text>
  
          </TouchableOpacity>
  
          
  
          <Text onPress={handleRegisterCompanyPress} style={[styles.text3, {marginVertical: 10}]} >Cadastre sua empresa</Text>
        
        </ImageBackground>
      
      </View>
  
    );

  }

}
