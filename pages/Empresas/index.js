import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, ScrollView, Modal } from 'react-native';
import styles from './style';
import {Feather ,Ionicons, MaterialIcons, FontAwesome5, AntDesign} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"
import style from './style';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

export default function App({ route }) {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const fakeData = [
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    },
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    },
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    },
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    },
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    }
  ];

  const handleBackPress = () => {

    navigation.navigate("Categorias");
    
  }

  const handleNextPress = () => {

    navigation.navigate("EmpresaDetalhes");
    
  }
  const image = { uri: "https://i.pinimg.com/564x/93/16/64/93166451fc4aa37d08f871fc8524adca.jpg"}

  const [categoryText, setCategory] = useState(route.params.category);
  

  const handleCategory = (value) => {
    setCategory(value);
    setModalVisible(!modalVisible);
  }
  
  return (

    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {/*<ImageBackground source={require("../../../assets/bg_svg.png")} style={styles.bg_header}>
        </ImageBackground>*/}
          <View style={styles.content}>
              <View style={styles.headerContainer}>
                <View style={styles.header}>
                      {
                      //botao para retornar a tela anterior
                      //Colocar no onPress a ação de navegar entre páginas
                      }
                      <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={handleBackPress}
                        
                      >
                        <AntDesign name="left" size={36} color="#7F51CF"/>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={{marginRight: 40, marginTop: 15}}
                        onPress={() => (setModalVisible(true))}
                        
                      >
                        <Feather name="menu" size={36} color="#7F51CF"/>
                      </TouchableOpacity>
                      
                  </View>
                    <View style={styles.alignCenter}>
                      <Text style={styles.titleStyle}>Categoria: </Text>
                      <Text style={styles.text}>{categoryText}</Text>            
                    </View>
              </View>
            </View>

            {/**Modal Menu*/}
            <Modal
             visible={modalVisible}
             style={styles.modal}
             animationType="slide"
            >

              <View style={styles.modal}>

                <View style={styles.buttonContainer}>
                  
                  <TouchableOpacity 
                    style={styles.buttonModal}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <AntDesign name="close" size={35} color="#7F51CF" />
                  </TouchableOpacity>
                  <Text style={styles.text}>Escolha uma categoria</Text>

                    <TouchableOpacity onPress={() => handleCategory("Moda")}>  
                      <View style={styles.category}>
                        <Image style={styles.icon} source={require("../../assets/roupas.png")}/>

                        <Text style={styles.textStyle}>Categoria Moda</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleCategory("Alimentos")}>
                      <View style={styles.category}>
                        <Ionicons style={styles.icon} name="ios-fast-food-outline" size={40}color="white" />

                        <Text style={styles.textStyle}>Categoria Alimentos</Text>
                      </View>
                    </TouchableOpacity>

                  
                    <TouchableOpacity onPress={() => handleCategory("Tecnologia")}>
                      <View style={styles.category}>
                        <MaterialIcons style={styles.icon} name="computer" size={40} color="white" />

                        <Text style={styles.textStyle}>Categoria Tecnologia</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleCategory("Estética")}>
                      <View style={styles.category}>
                        <Image style={styles.icon} source={require("../../assets/maquiagem.png")}/>

                        <Text style={styles.textStyle}>Categoria Estética</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleCategory("Outro")}>
                      <View style={styles.category}>
                        <FontAwesome5 style={styles.icon} name="building" size={40} color="white" />

                        <Text style={styles.textStyle}>Categoria Outro</Text>
                      </View>
                    </TouchableOpacity>
                </View>
              </View>
            </Modal>

            
         
          <FlatList 
              data={fakeData}
              style={styles.companyList}
              showsVerticalScrollIndicator = {false}
              renderItem={( {item } ) => (

                //botao para abrir a tela de informação da empresa
                //Colocar no onPress a ação de navegar entre páginas
                <TouchableOpacity style={styles.alignCenter} onPress={handleNextPress}>
                  <View style={styles.company}> 
        
                        <View>
                          <Image style={styles.image} source={image} />
                        </View>
                        <View style={styles.textCompany}>
                          <Text style={styles.companyName}>{item.nomeEmpresa}</Text>
                          <Text style={styles.companyValue}>{item.description}</Text>
                          <MaterialIcons style={styles.alignEnd} name="keyboard-arrow-right" size={30} color="#7F51CF" />
                        </View>
                        
                    
                  </View>
                </TouchableOpacity>

              )}

              keyExtractor={(item, index) => index.toString()}
        
          />
      </ScrollView>
    </View>
  );
}
