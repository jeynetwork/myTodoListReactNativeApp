import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function TodoList({item, pressHandle}){
    return(
        <TouchableOpacity style={styles.todolist} onPress={()=>pressHandle(item.key)} >
            <View style={styles.item} >
                <MaterialIcons name = 'delete' size={18} style={styles.iconStyle} color='maroon'/>
                <Text style={styles.text} >{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    todolist:{
        borderBottomWidth:1,
        paddingBottom:15,
        paddingTop:10,
        borderStyle:'dotted',
        borderBottomColor:'maroon'
    }, 
    iconStyle:{
        alignItems:'flex-start'
    },
    item:{
        borderWidth:1,
        marginTop:0,
        padding:10,
        borderRadius:3,
        borderStyle:'dashed',
        flexDirection:'row',
        borderColor:'maroon'
    },
    text:{
        marginLeft:10,
    }
})