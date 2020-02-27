import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/Layout';
import ControlLayout from '../components/Control-layout';
import PlayPause from '../components/Play-pause';

const Player = () => {
  const [loading, setLoading] = useState(true);
  const [paused, setPause] = useState(false);

  const onBuffer = ({isBuffering}) => {
    setLoading(isBuffering);
  };

  const onLoad = () => {
    setLoading(false);
  };

  const playPause = () => {
    setPause(!paused);
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
          paused={paused}
        />
      }
      loader={<ActivityIndicator color="white" />}
      controls={
        <ControlLayout>
          <PlayPause onPress={playPause} paused={paused} />
        </ControlLayout>
      }
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
