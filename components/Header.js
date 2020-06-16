import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header} >
            <Text style={styles.text} >My todos</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width:'100%',
        backgroundColor: 'maroon',
        padding:20
    },
    text:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase'
    }
});