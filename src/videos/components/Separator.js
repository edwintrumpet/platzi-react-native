import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Separator = ({color}) => (
  <View style={[styles.separator, color ? styles[color] : styles.colorless]} />
);

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
  colorless: {
    borderTopColor: '#eaeaea',
  },
  green: {
    borderTopColor: 'green',
  },
  red: {
    borderTopColor: 'red',
  },
  blue: {
    borderTopColor: 'blue',
  },
  yellow: {
    borderTopColor: 'yellow',
  },
});

export default Separator;
