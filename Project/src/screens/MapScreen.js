import React, {useState} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import Logo from '../../assets/images/RoadieLogo.png';
import pfp from '../../assets/images/ProfileIcon.jpg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const HomeScreen = () => {
    return (
        <View style = {StyleSheet.root}>
            <Text style = {styles.heading}>Coming Soon</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
      aligItemsontent: 'center',
    },
    
    heading: {
      alignItems: 'center',
      fontSize: 50,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });

export default HomeScreen