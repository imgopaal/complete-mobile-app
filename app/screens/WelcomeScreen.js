import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import colors from '../colors/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={4}
      source={require('../assets/backGround.jpg')}>
      <View style={styles.logoCont}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => console.log('Login')} />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => console.log('Register')}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonsContainer: {
    padding: 10,
    width: '100%',
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
    flexDirection: 'column-reverse',
  },
});
export default WelcomeScreen;
