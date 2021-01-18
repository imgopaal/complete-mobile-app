import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.background}
        source={require('../assets/chair.jpg')}></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4ecdc4',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  background: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreen;
