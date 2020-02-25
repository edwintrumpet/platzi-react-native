import React from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';

const App = () => (
  <Home>
    <Header />
    <Text>First children</Text>
    <Text>Second children</Text>
  </Home>
);

export default App;
