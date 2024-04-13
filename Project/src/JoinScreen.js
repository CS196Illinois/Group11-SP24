import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Groups from './groups.json'

const JoinScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.Header}>Join a Group</Text>
            <Text>Please Select a Group from the List Below</Text>
            {
                Groups && Groups.map( groups => {
                    return(
                        <TouchableOpacity style={styles.buttonSection}>
                            <View style={styles.buttonArea}>
                            <View style={styles.iconArea}>
                        
                            </View>
                            <Text style={styles.buttonText}>{groups.name}</Text>
                            </View>
                            <View style={styles.space}></View>
                         </TouchableOpacity>
                    )
                })
            }
             
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
    buttonSection: {
        padding: 15,
        marginTop: 20,
    },
    buttonArea: {
        flexDirection: 'row',
    },
    buttonText: {
        width: 400,
        color: 'black',
        fontSize: 20,
    },
    space: {
        width:400,
        marginTop: 10,
        height: 0.5,
        backgroundColor: 'black',
    },
    
})