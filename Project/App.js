/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler'
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/Sign In Screen/SignInScreen';
import SignUpScreen from './src/screens/Sign Up Screen/SignUpScreen';
import BottomTab from  './src/navigations/BottomTabBar';
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen'
import Navigation from './src/navigations/Navigation'





/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
});

export default App;
