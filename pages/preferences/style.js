import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
  },
  scroll: {
    width: "100%"
  },
  textStyle: {
    color: "#000",
    fontSize: 23,
    fontWeight: "bold", 
    marginTop: 20,
    width: 300,
    flex: 1,
    alignSelf: "flex-start",
    marginLeft: "10%"

  },
  header: {
    flexDirection: "row",
    marginLeft: 20,
    paddingTop: Constants.statusBarHeight + 20,
    marginBottom: 40
    
  },
  headerContainer:{
    width: "100%",
    alignItems: 'center',
    height: 300,
    marginBottom: 20,
  },
  detailsButton: {
    flex: 1,
    alignSelf: "flex-end",
  },
  content: {
    flexDirection: "column",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
    icon: {
    width: 40,
    height: 40,
    marginBottom: 15
  },
  categories: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },

  category: {
    width: 152,
    height: 134,
    alignItems: 'center',
    backgroundColor: "#7F51CF",
    padding: 20,
    marginLeft: 15,
    marginRight: '5%',
    marginBottom: 15,
    borderRadius: 15
  },

  categoryText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "100"
  },
  roundButton1: {
    width: 152,
    height: 50,
    marginTop: 20,
    marginRight: 30, 
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'flex-end',
    borderRadius: 10,
    backgroundColor: "#9400d4",
  },
  text2: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff"
  }
});
