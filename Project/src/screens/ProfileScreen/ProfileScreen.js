import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import ProfilePic from '../../../assets/images/refProfilePic.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const ProfileScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onSignInPressed = () => {
        console.warn("Sign In")
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
        marginTop: 100,
        marginBottom: 20,
    },

    Username: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1B1B1B',
    },
})

export default ProfileScreen