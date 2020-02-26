import React from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/Suggestion-list-layout';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

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

  const renderEmpty = () => <Empty text="No hay sugerencias :(" />;

  const renderSeparator = () => <Separator />;

  const renderSuggestion = ({item}) => <Suggestion {...item} />;

  return (
    <Layout title="Recomendado para ti">
      <FlatList
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderSuggestion}
      />
    </Layout>
  );
};

export default SuggestionList;
