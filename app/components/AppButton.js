import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../colors/colors';
export default function AppButton({title, onPress, color="primary"}) {
  return (
    // <View style={styles.buttonCont}>
    <TouchableOpacity
      style={([styles.button, {backgroundColor: colors[color]}])}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  buttonCont: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    padding: 12,
    marginTop: 4,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
