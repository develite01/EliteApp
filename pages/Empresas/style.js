import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    padding: 19,
    backgroundColor: "#1E202C",
    width: 320,
    textAlign: "left",
    fontSize: 15,
    borderRadius: 50,
    color: "#c2c2c2",
    marginTop: 10,
  },
  titleStyle: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    padding: 20,  
    marginTop: 30,

  },
  text: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: -10,
    marginBottom: 30

  },
  header: {
    flexDirection: "row",
    marginLeft: 20,
    paddingTop: Constants.statusBarHeight + 20,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20
  },
  category: {
    width: 358,
    height: 88,
    backgroundColor: "#7F51CF",
    padding: 20,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: "row"
  },
  textStyle: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
   

  },

  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  content:{
    //backgroundColor: "#212330",
    width: "100%",
    textAlign: "center",
    height: 300,
    justifyContent: "center",
  },
  detailsButton: {
    flex: 1,
    alignSelf: "flex-end",
    marginTop: 20
  },

  companyList: {
    marginTop: 15,
  },
  company:{
    flexDirection: 'row',
    padding: 24,
    backgroundColor: '#E3E3E3',
    marginBottom: 18,
    width: 367,
    
    borderRadius: 10,
    justifyContent: "space-between",
    borderColor: "#7F51CF",
    borderLeftWidth: 5,
    
  },

  companyName: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold"
  },

  companyValue: {
    color: "#1f1f1f",
    width: 250
  },
  textCompany:{
    marginLeft: 10
  },

  image: {
    width: 53,
    height: 53,
    borderRadius: 50,
  },

  bg_header:{
    width: "100%",
    height: 400,
    marginTop: -30
  },

  scroll: {
    width: "100%",
  },

  alignCenter: {
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center"
  },
  alignEnd: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 6
  },
  modal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEDEDE",
    padding: 20
    
  },
  buttonModal:{
    flex: 1,
    alignSelf: "flex-end",
  }
});
