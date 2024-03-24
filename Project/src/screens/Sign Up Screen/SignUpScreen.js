import React, {useState} from 'react'
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('')
    
    const onSignInPressed = () => {
        console.warn("Sign In")
    }

    const onRegisterPressed = () => {
        console.warn("Register")
    }

    const onTermsPressed = () => {
        console.warn("Terms of Use")
    }

    const onPrivacyPressed = () => {
        console.warn("Privacy Policy")
    }



    const {height} = useWindowDimensions();


    return (
        <View style={styles.root}>
            <Text style={styles.title}>
                Create an Account
            </Text>


            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
            />

            <CustomInput 
            placeholder="Email" 
            value={email} 
            setValue={setEmail} 
            />

            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry
            />

            <CustomInput 
            placeholder="Repeat Password" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat} 
            secureTextEntry
            />

            <CustomButton 
            text="Register"
             onPress={onRegisterPressed}
            />

            <Text style={styles.text}>
                By registering, you confirm that you accept our 
                <Text style={styles.link} onPress={onTermsPressed}>
                    Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
            </Text>

        

            <CustomButton 
            text="Have an Account? Sign In" 
            onPress={onSignInPressed} 
            type='TERTIARY' 
            />

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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1B1B1B',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10
    },

    link: {
        color: '#FDB075',

    },

})

export default SignUpScreen