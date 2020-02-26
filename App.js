import React, {useEffect, useState} from 'react';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/Suggestion-list';
import Api from './src/utils/api';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const movies = await Api.getSugerencias(10);
      console.log(movies);
      setList(movies);
    })();
  }, []);

  return (
    <Home>
      <Header />
      <SuggestionList list={list} />
    </Home>
  );
};

export default App;
