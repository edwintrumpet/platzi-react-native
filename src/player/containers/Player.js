import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/Layout';

const Player = () => (
  <Layout
    video={
      <Video
        source={{
          uri: 'http://media.w3.org/2010/05/bunny/movie.mp4',
        }}
        style={styles.video}
        resizeMode="contain"
      />
    }
  />
);

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
