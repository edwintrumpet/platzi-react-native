import React, {useEffect, useState} from 'react';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/Suggestion-list';
import Api from './src/utils/api';
import CategoryList from './src/videos/containers/Category-list';
import Player from './src/player/containers/Player';

const App = () => {
  const [list, setList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const [movies, categories] = await Promise.all([
        Api.getSugerencias(10),
        Api.getMovies(),
      ]);
      console.log(movies);
      console.log(categories);
      setList(movies);
      setCategories(categories);
    })();
  }, []);

  return (
    <Home>
      <Header />
      <Player />
      <CategoryList categories={categories} />
      <SuggestionList list={list} />
    </Home>
  );
};

export default App;
