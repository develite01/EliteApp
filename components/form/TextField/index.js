import React from 'react'
import { View , Text , StyleSheet } from 'react-native'

export default function App() {
    return (
        <View style={styles.textField} />
    )
}

const styles = StyleSheet.create({
    textField: {
        width: '95%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#e0e0e0'
        
    }
})