import React from 'react';
import {View, StyleSheet} from 'react-native';

const Layout = ({video}) => (
  <View style={styles.container}>
    <View style={styles.video}>{video}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
  },
});

export default Layout;
