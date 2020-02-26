import React from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/Category-list-layout';
import Empty from '../components/Empty';
import Separator from '../components/Horizontal-separator';
import Suggestion from '../components/Suggestion';

const CategoryList = ({categories}) => {
  const renderEmpty = () => <Empty text="No hay sugerencias :(" />;

  const renderSeparator = () => <Separator />;

  const renderSuggestion = ({item}) => <Suggestion {...item} />;

  const key = item => item.id.toString();

  return (
    <Layout title="Categorías">
      <FlatList
        horizontal
        keyExtractor={key}
        data={categories}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderSuggestion}
      />
    </Layout>
  );
};

export default CategoryList;
