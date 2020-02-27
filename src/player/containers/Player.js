import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/Layout';

const Player = () => {
  const [loading, setLoading] = useState(true);

  const onBuffer = ({isBuffering}) => {
    setLoading(isBuffering);
  };

  const onLoad = () => {
    setLoading(false);
  };

  return (
    <Layout
      loading={loading}
      video={
        <Video
          source={{
            uri: 'http://media.w3.org/2010/05/bunny/movie.mp4',
          }}
          style={styles.video}
          resizeMode="contain"
          onBuffer={onBuffer}
          onLoad={onLoad}
        />
      }
      loader={<ActivityIndicator color="white" />}
    />
  );
};

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
