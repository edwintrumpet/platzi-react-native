import React, {useEffect, useState} from 'react';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/Suggestion-list';
import Api from './src/utils/api';
import CategoryList from './src/videos/containers/Category-list';
import Video from 'react-native-video';
import {View, StyleSheet} from 'react-native';

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
      <View style={styles.container}>
        <Video
          source={{
            uri: 'http://media.w3.org/2010/05/bunny/movie.mp4',
          }}
          style={styles.video}
          resizeMode="contain"
        />
      </View>
      <CategoryList categories={categories} />
      <SuggestionList list={list} />
    </Home>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default App;
