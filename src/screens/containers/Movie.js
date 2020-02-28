import React from 'react';
import MovieLayout from '../components/Movie';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';

const Movie = () => (
  <MovieLayout>
    <Header />
    <Player />
  </MovieLayout>
);

export default Movie;
