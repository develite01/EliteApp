import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    image: {
      flex:1,
      resizeMode: "cover",
      alignItems: "center",
      justifyContent: "flex-end"
    },
  
    roundButton1: {
      width: 250,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#9400d4",
    },
  
    text1: {
  
      fontWeight: "bold",
      fontSize: 30,
      color: "#fff",
      marginBottom: 80
  
    },
  
    text2: {
  
      fontWeight: "bold",
      fontSize: 15,
      color: "#fff"
  
    },
  
    text3: {
  
      marginBottom: 20,
      fontSize: 15,
      color: "#fff",
      textDecorationLine: 'underline'
  
    }
  
});