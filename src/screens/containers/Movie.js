import React from 'react';
import {connect} from 'react-redux';
import MovieLayout from '../components/Movie';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details';

const Movie = ({dispatch, movie}) => {
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
      <Details {...movie} />
    </MovieLayout>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(Movie);
