import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={4}
      source={require('../assets/backGround.jpg')}>
      <View style={styles.logoCont}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}></Image>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
      backgroundColor:'#fc5c65',
    // backgroundColor: 'gold',
  },
  registerButton: {
    width: '100%',
    height: 70,
      backgroundColor:'#4ecdc4',
    // backgroundColor: 'grey',
  },
  logo: {
    height: 100,
    width: 100,
    position: 'absolute',
    top: 50,
  },
  logoCont: {
    position: 'absolute',
    top: 10,
    alignItems: 'center',
    flexDirection:'column-reverse'
  },
});
export default WelcomeScreen;
