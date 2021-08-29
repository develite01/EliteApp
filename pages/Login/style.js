import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: '5%',
        justifyContent: 'center'
    },
    text: {
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInput: {
        width: '95%',
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#e0e0e0'
    },
    roundButton1: {
        width: '95%',
        height: 50,
        marginTop: 20,
        marginRight: '5%', 
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'flex-end',
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#9400d4",
    }
})