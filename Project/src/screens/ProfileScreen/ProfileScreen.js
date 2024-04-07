import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity} from 'react-native'
import ProfilePic from '../../../assets/images/refProfilePic.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import accountIcon from '../../../assets/images/ProfileIcon.jpg'

const ProfileScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onAccountPressed = () => {
        console.warn("Account")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }

    const onSignUpPressed = () => {
        console.warn("Sign Up")
    }


    return (
        <View style={styles.root}>
            <Image 
            source={ProfilePic}
            resizeMode= 'contain'
            style={styles.profilePic}>
                
            </Image>

            <Text style={styles.Username}>
                Username
            </Text>

            <TouchableOpacity style={styles.buttonSection}>
                <View style={styles.buttonArea}>
                <View style={styles.iconArea}>
                        
                </View>
                <Text style={styles.buttonText}>Friends</Text>
                </View>
                <View style={styles.space}></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSection}>
                <View style={styles.buttonArea}>
                <View style={styles.iconArea}>
                        
                </View>
                <Text style={styles.buttonText}>Preferences</Text>
                </View>
                <View style={styles.space}></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSection}>
                <View style={styles.buttonArea}>
                <View style={styles.iconArea}>
                        
                </View>
                <Text style={styles.buttonText}>Account</Text>
                </View>
                <View style={styles.space}></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSection}>
                <View style={styles.buttonArea}>
                <View style={styles.iconArea}>
                        
                </View>
                <Text style={styles.buttonText}>Log Out</Text>
                </View>
                <View style={styles.space}></View>
            </TouchableOpacity>
           

        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    profilePic: {
        height: 155,
        width: 155,
        borderRadius: 999,
        marginTop: 20,
        marginBottom: 20,
    },

    Username: {
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


    iconArea: {

    },

    iconStyle: {

    },

    buttonText: {
        width: 250,
        color: 'black',
        fontSize: 20,
    },

    space: {
        width:300,
        marginTop: 10,
        height: 0.5,
        backgroundColor: 'black',
    },
})

export default ProfileScreen