import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  scroll: {
    width: "100%"
  },
  textStyle: {
    color: "#ffff",
    fontSize: 25,
    fontWeight: "bold", 
    marginVertical: 5,

  },
  header: {
    flexDirection: "row",
    marginLeft: 20,
    paddingTop: Constants.statusBarHeight + 20,
    marginBottom: 40
    
  },
  headerContainer:{
    backgroundColor: "#212330",
    width: "100%",
    alignItems: 'center',
    height: 300,
    marginBottom: 20
  },
  detailsButton: {
    flex: 1,
    alignSelf: "flex-end",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  content: {
    flexDirection: "column",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  companyInfo: {
    borderColor: "#212330",
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '95%',
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 25,
    backgroundColor: '#e0e0e0'
  },

  textCompany: {
    width: 250,
    paddingLeft: 15
  },
  companyInfoDesc: {
    paddingLeft: 25,
    width: 100,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '95%',
    justifyContent: "space-between",
    alignItems: "center",
    height: 120,
    backgroundColor: '#e0e0e0'
  },

  button: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '95%',
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#25D366",
    marginTop: 20,
    height: 70
  },
  text: {
    color: "#ffff",
    fontSize: 17,
  },
  icon: {
    width: 35,
    height: 35
  },
  iconCompany: {
    width: 25,
    height: 35
  },
  bg_header:{
    width: "100%",
    height: 400,
    marginBottom: 20
  }
});
