import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Api from './utils/api';
import CategoryList from './videos/containers/Category-list';
import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import SuggestionList from './videos/containers/Suggestion-list';
import Movie from './screens/containers/Movie';

const AppLayout = ({dispatch, selectedMovie}) => {
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

  if (selectedMovie) {
    return <Movie />;
  }
  return (
    <Home>
      <Header />
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(AppLayout);
