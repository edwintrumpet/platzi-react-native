import React from 'react';
import {Text, FlatList} from 'react-native';
import Layout from '../components/Suggestion-list-layout';

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
    <Layout title="Recomendado para ti">
      <FlatList
        data={list}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </Layout>
  );
};

export default SuggestionList;
