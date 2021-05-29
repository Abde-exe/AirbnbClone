import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AppButton = ({title, style, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    padding: 8,
    width: '50%',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
});
