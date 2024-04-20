import React, {useState} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import Logo from '../../assets/images/RoadieLogo.png';
import pfp from '../../assets/images/ProfileIcon.jpg';



const HomeScreen = () => {
    return (
        <View style = {StyleSheet.root}>
            <Text style = {styles.heading}>Coming Soon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
      width: '30%',
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 10,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    phone: {
      fontSize: 14,
    },
  });

export default HomeScreen