import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../../assets/images/RoadieLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const SignInScreen = () => {
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



    const {height} = useWindowDimensions();


    return (
        <View style={styles.root}>
            <Image 
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain" 
            />

            <Text>Welcome Back!</Text>

            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
            />

            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry
            />

            <CustomButton text="Sign In" onPress={onSignInPressed} />

            <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type='SECONDARY' />

            <CustomButton text="Dont Have An Account? Sign Up" onPress={onSignUpPressed} type='TERTIARY' />

        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default SignInScreen