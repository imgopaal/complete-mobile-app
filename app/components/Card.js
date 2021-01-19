import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../colors/colors';
// import Card from './Card';

export default function Card({title, subTitle, image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius:13,
    overflow:'hidden'
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 3,
    fontSize: 17,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:colors.secondary
  },
});
