import React, {useEffect} from 'react';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/Suggestion-list';
import Api from './src/utils/api';
import CategoryList from './src/videos/containers/Category-list';
import Player from './src/player/containers/Player';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  useEffect(() => {
    (async () => {
      const [suggestionList, categoryList] = await Promise.all([
        Api.getSugerencias(10),
        Api.getMovies(),
      ]);
      store.dispatch({
        type: 'SET_CATEGORY_LIST',
        payload: {categoryList},
      });
      store.dispatch({
        type: 'SET_SUGGESTION_LIST',
        payload: {suggestionList},
      });
    })();
  }, []);

  return (
    <Provider store={store}>
      <Home>
        <Header />
        <Player />
        <CategoryList />
        <SuggestionList />
      </Home>
    </Provider>
  );
};

export default App;
