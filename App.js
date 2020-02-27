import React, {useEffect} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/Suggestion-list';
import Api from './src/utils/api';
import CategoryList from './src/videos/containers/Category-list';
import Player from './src/player/containers/Player';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import Loading from './src/sections/components/Loading';

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
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Home>
          <Header />
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </PersistGate>
    </Provider>
  );
};

export default App;
