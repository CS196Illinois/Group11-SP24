import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

const JoinScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.Header}>Join a Group</Text>
        </View>
    )
}

export default JoinScreen

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    Header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1B1B1B',
    },
})