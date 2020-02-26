import React from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/Suggestion-list-layout';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

const SuggestionList = ({list}) => {
  const renderEmpty = () => <Empty text="No hay sugerencias :(" />;

  const renderSeparator = () => <Separator />;

  const renderSuggestion = ({item}) => <Suggestion {...item} />;

  const key = item => item.id.toString();

  return (
    <Layout title="Recomendado para ti">
      <FlatList
        keyExtractor={key}
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderSuggestion}
      />
    </Layout>
  );
};

export default SuggestionList;