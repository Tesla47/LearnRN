import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
