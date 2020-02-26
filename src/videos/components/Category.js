import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Category = ({genres, background_image}) => (
  <View>
    <ImageBackground source={{uri: background_image}} style={styles.wraper}>
      <Text style={styles.genre}>{genres[0]}</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  wraper: {
    width: 250,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  },
});

export default Category;
