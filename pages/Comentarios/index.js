import React, { useState , useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, ScrollView, Modal , Dimensions , TextInput } from 'react-native';
import styles from './style';
import {Feather ,Ionicons, MaterialIcons, FontAwesome, FontAwesome5, AntDesign} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"
import style from './style';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

function Comment({user, text}) {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    return(
        <View style={{width:Dimensions.get('window').width*0.9, margin: 10, borderRadius: 10, backgroundColor: '#f0f0f0'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome style={{margin: 10}} name="user-circle" size={25} color="black" />
                <Text style={{width: '80%', margin: 10, fontWeight: 'bold'}}>{user}</Text>
            </View>
            <Text style={{width: '80%', margin: 10}}>{text}</Text>
            <View style={{marginLeft: Dimensions.get('window').width*0.65, flexDirection: 'row'}}>
                <TouchableOpacity style={{margin: 10}} onPress = {() => {setLiked(!liked); setDisliked(false)}}>
                    { !liked && <AntDesign name="like2" size={20} color="blue" />}
                    { liked && <AntDesign name="like1"  size={20} color="blue" />}
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}} onPress = {() => {setDisliked(!disliked); setLiked(false)}}>
                    { !disliked && <AntDesign name="dislike2" size={20} color="red" />}
                    { disliked && <AntDesign name="dislike1"  size={20} color="red" />}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function App( ) {
    const [comments, setComments] = useState(null);
    
    const user = 'user@1';
    const [text, setText] = useState(null);

    useEffect( () => {

        const loadComents = async () => {
            await fetch('http://192.168.1.105:8080/comentarios/listar', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data=> {
                setComments(data);
            })
        }

        loadComents();
    }, []);

    const submitComment = async () => {
        await fetch('http://192.168.1.105:8080/comentarios/publicar', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            text: text
        })
        })
        .then(response => response.text())
        .then(data=> {
            console.log(data);
        })

        setComments([...comments, {user: user, text: text}]);
    } 

    return(
        <View style={styles.container}>
            <FlatList
            data={comments}
            style={{height: '90%', flexGrow: 0}}
            renderItem={( {item } ) => (<Comment user = {item.user} text = {item.text} />)}
            keyExtractor={(item, index) => item.key}/>
            <View style={{height: Dimensions.get('window').height*0.10, alignItems: 'center', flexDirection: 'row'}}>
            <TextInput multiline 
            placeholder={'Escreva a sua opinião sobre o produto...'}
            style={{
                width: Dimensions.get('window').width*0.8, height: 40,
                marginHorizontal: '3.3%', padding: 10, borderRadius: 10,
                backgroundColor: '#f0f0f0'
            }}
            onChangeText={(val)=> setText(val)} />
            <TouchableOpacity onPress={submitComment}>
                <MaterialIcons name="keyboard-arrow-right" size={20} style = {{marginRight: '3.3%'}} size={Dimensions.get('window').width*0.1} color="purple" />
            </TouchableOpacity>
            </View>
        </View>
    )
}