import React from 'react';
import {Text, FlatList} from 'react-native';

const SuggestionList = () => {
  const list = [
    {
      title: 'Avengers',
      key: '1',
    },
    {
      title: 'Pokémon',
      key: '2',
    },
  ];
  return (
    <FlatList data={list} renderItem={({item}) => <Text>{item.title}</Text>} />
  );
};

export default SuggestionList;
