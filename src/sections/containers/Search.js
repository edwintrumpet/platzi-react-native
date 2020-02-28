import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Search = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    console.log(text);
  };

  const handleChangetext = textValue => {
    setText(textValue);
  };

  return (
    <TextInput
      placeholder="Busca tu película favorita"
      underlineColorAndroid="transparent"
      autoCorrect={false}
      autoCapitalize="none"
      onSubmitEditing={handleSubmit}
      onChangeText={handleChangetext}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default Search;
