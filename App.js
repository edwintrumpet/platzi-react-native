import React from 'react';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/Suggestion-list';

const App = () => (
  <Home>
    <Header />
    <SuggestionList />
  </Home>
);

export default App;
