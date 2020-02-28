import React from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/Suggestion-list-layout';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';
import {connect} from 'react-redux';

const SuggestionList = ({list, dispatch}) => {
  const renderEmpty = () => <Empty text="No hay sugerencias :(" />;

  const renderSeparator = () => <Separator />;

  const viewMovie = item => {
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      },
    });
  };

  const renderSuggestion = ({item}) => (
    <Suggestion {...item} onPress={() => viewMovie(item)} />
  );

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

const mapStateToProps = state => {
  return {
    list: state.suggestionList,
  };
};

export default connect(mapStateToProps)(SuggestionList);
