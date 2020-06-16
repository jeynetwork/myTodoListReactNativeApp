import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput,Alert, Button, TouchableOpacity} from 'react-native';

export default function Input({submitHandler}) {
    const [text, setText] = useState('');
    const handleChange = (value)=>{
        setText(value);
    }
    const handleSubmit = ()=>{
        submitHandler(text);
    }
    
    return (
        <View style={styles.form} >
            <Text>Add to list</Text>
            <TextInput placeholder='eg of TODO' onChangeText={handleChange} style={styles.input} ></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                <Text style={styles.text}>Add toDo</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    form:{
        paddingBottom:10
    },
    input:{
        borderWidth:1,
        borderColor:'gray',
        marginTop:10,
        padding:10,
        borderRadius:4
    },
    button:{
        width:'100%',
        backgroundColor:'maroon',
        borderRadius:4,
        padding:12,
        marginTop:10
    },
    text:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    }
});