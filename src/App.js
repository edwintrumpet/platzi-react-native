import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Api from './utils/api';
import CategoryList from './videos/containers/Category-list';
import Player from './player/containers/Player';
import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import SuggestionList from './videos/containers/Suggestion-list';

const AppLayout = ({dispatch}) => {
  useEffect(() => {
    (async () => {
      const [suggestionList, categoryList] = await Promise.all([
        Api.getSugerencias(10),
        Api.getMovies(),
      ]);
      console.log(suggestionList);
      dispatch({
        type: 'SET_CATEGORY_LIST',
        payload: {categoryList},
      });
      dispatch({
        type: 'SET_SUGGESTION_LIST',
        payload: {suggestionList},
      });
    })();
  }, [dispatch]);

  return (
    <Home>
      <Header />
      <Player />
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

export default connect(null)(AppLayout);
