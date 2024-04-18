import React, {useState} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
// import Logo from '../../assets/images/RoadieLogo.png';
import pfp from '../../assets/images/ProfileIcon.jpg';

const ProfileCard = ({ name, phone, image }) => (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );

const HomeScreen = () => {
    return (
        <View style = {StyleSheet.root}>
            
             {/* <Image
            source={Logo}
            style={[styles.logo, {height: height * .3}]}
            resizeMode="contain"
            />  */}

            <Text style={styles.heading}>Your Group</Text>
            <View style={styles.profileContainer}>
                <ProfileCard
                    name="Jenny"
                    phone="867-5329"
                    image={pfp}
                />
                <ProfileCard
                    name="Baku Patel"
                    phone="217-384-1111"
                    image={pfp}
                />
                <ProfileCard
                    name="Robert J. Jones"
                    phone="217-333-1000"
                    image={pfp}
                />
            </View>
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