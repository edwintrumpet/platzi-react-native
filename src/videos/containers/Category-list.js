import React from 'react';
import {FlatList} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

const CategoryList = ({categories}) => {
  const renderEmpty = () => <Empty text="No hay sugerencias :(" />;

  const renderSeparator = () => <Separator />;

  const renderSuggestion = ({item}) => <Suggestion {...item} />;

  const key = item => item.id.toString();

  return (
    <FlatList
      horizontal
      keyExtractor={key}
      data={categories}
      ListEmptyComponent={renderEmpty}
      ItemSeparatorComponent={renderSeparator}
      renderItem={renderSuggestion}
    />
  );
};

export default CategoryList;
