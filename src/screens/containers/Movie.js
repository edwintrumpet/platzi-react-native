import React from 'react';
import {connect} from 'react-redux';
import MovieLayout from '../components/Movie';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';

const Movie = ({dispatch}) => {
  const closeVideo = () => {
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    });
  };

  return (
    <MovieLayout>
      <Header>
        <Close onPress={closeVideo} />
      </Header>
      <Player />
    </MovieLayout>
  );
};

export default connect(null)(Movie);
