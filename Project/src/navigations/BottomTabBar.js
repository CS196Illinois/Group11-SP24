import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {HomeScreen, ProfileScreen, MapScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


 
const Tab = createBottomTabNavigator();
const bottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component ={HomeScreen} />
            <Tab.Screen name = "Profile" component ={ProfileScreen} />
            <Tab.Screen name = "Map" component ={MapScreen} />
        </Tab.Navigator>    
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '90%',
        left: '5%',
        bottom: 20,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 12,
    }, 
    tabItem: {
        marginBottom: 7,

    }

})

export default bottomTab