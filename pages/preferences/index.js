import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { Feather ,Ionicons, MaterialIcons, FontAwesome5 , AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Options({categoria, imagem, icon}) {
  const [ligado, setLigado] = useState(false);

  return (
    <TouchableOpacity onPress={() => setLigado(!ligado)}>  
      <View style={[styles.category, {backgroundColor:ligado?'#7F51CF': '#3a3a3a'}]}>
      { icon ? <MaterialIcons style={styles.icon} name={icon} size={40} color="white" /> : <Image style={styles.icon} source={imagem}/>}
        <Text style={styles.categoryText}>{categoria}</Text>

      </View>
    </TouchableOpacity>
  );
}

export default function App({navigation}) {

  const handleBackPress = () => {

    navigation.navigate("initial");

  }

  const handleNextPress = (category) => {

    navigation.navigate("terms");

  }

  return (

    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        
        <View style={styles.headerContainer}>
            <Text style={styles.textStyle}>Selecione suas preferências</Text>
        </View>
      
     
      
      <View style={styles.content}>
        <View style={styles.containerCategories}>

         {
           //Group one
         }
          <View style={styles.categories}>
            
            <Options categoria={'Moda'} imagem={require('../../assets/roupas.png')}></Options>

            <Options categoria={'Alimentação'} icon={'fastfood'}></Options>

          </View>

          {
           //Group two
          }

          <View style={styles.categories}>

            <Options categoria={'Tecnologia'} icon={'computer'}></Options>

            <Options categoria={'Cosméticos'} imagem={require('../../assets/maquiagem.png')}></Options>

          </View>

          {
           //Group three
          }  

          {
           //Categories end
          }
          
        </View>
        
      </View>

      <TouchableOpacity onPress={handleNextPress}>
        <AntDesign style={{alignSelf: 'flex-end', marginRight: '5%', marginTop: 40}} name="right" size={36} color="#9400d4" />
      </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
}
