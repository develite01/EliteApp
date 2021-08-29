import React, { useState, useEffect } from 'react';
import { View , StyleSheet , Dimensions , Text , TouchableOpacity , Linking , Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { customMap } from './customMap'

export default function App({navigation}) {
    const handleBackPress = () => {
        navigation.navigate('companyList');
    }

    const image = { uri: "https://i.pinimg.com/564x/93/16/64/93166451fc4aa37d08f871fc8524adca.jpg"}
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const handleCallPress = () => {
        Linking.openURL("tel:+5511952202923");
      }
    const handleInstagramPress = () => {
        Linking.openURL("https://instagram.com");
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    if(!location) {
        return <View />
    } else {
        return(
            <View style = {styles.container}>
                <MapView
                style = {styles.map}
                initialRegion = {{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 1.022,
                longitudeDelta: 0.0821}}>
                    <Marker
                        coordinate={location.coords}
                        title = "Teste"
                        description = "Este é um teste" 
                        image = {require("../../assets/user_location.png")}
                    />
                </MapView>
                <View style={styles.bottom}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: Dimensions.get('window').width*0.3}}>
                            <Image style={styles.img} source={image}/>
                        </View>
                        <View style={{width: Dimensions.get('window').width*0.4}}>
                            <Text style={{width: '100%',fontSize: 20, fontWeight: 'bold'}}>Nome da empresa</Text>
                            <Text>Endereço da empresa</Text>
                        </View>
                        <TouchableOpacity onPress={handleCallPress} style={{width: 40, height: 40, marginHorizontal: 5, marginTop: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#7F51CF'}}>
                            <Feather name="phone" size={20} color="white"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleInstagramPress} style={{width: 40, height: 40, marginHorizontal: 5, marginTop: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#7F51CF'}}>
                            <Entypo name="instagram" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <Entypo name="chevron-small-up" size={40} color="#7F51CF" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    map: {
        height: Dimensions.get('window').height*0.75,
        width: Dimensions.get('window').width
    },
    bottom: {
        height: Dimensions.get('window').height*0.25,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        backgroundColor: '#fffafa'
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginHorizontal: 10,
        marginTop: 10
    }
});