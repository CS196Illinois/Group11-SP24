import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        
        },

    container_PRIMARY: {
        backgroundColor: '#F8B910'
    },

    container_SECONDARY: {
        backgroundColor: "#F9FBFC",
        borderWidth: 0,
    },

    container_TERTIARY: {
        color: 'white',
        borderWidth: 0,
    }, 

    text: {
        fontWeight: 'bold',
        color: '#383D46',
    },

    text_TERTIARY: {
        color: 'gray'
    },
});

export default CustomButton