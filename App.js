/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
// import {useDimensions} from '@react-native-community/hooks';
// import {useState} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import colors from './app/colors/colors';
import Card from './app/components/Card';

const App = () => {
  return (
    <View style={{backgroundColor: colors.secondary,height:"100%",padding:20}}>
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  );
};
export default App;
