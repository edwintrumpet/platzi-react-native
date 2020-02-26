import React, {useEffect} from 'react';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/Suggestion-list';
import Api from './src/utils/api';

const App = () => {
  useEffect(() => {
    (async () => {
      const movies = await Api.getSugerencias(10);
      console.log(movies);
    })();
  }, []);

  return (
    <Home>
      <Header />
      <SuggestionList />
    </Home>
  );
};

export default App;
