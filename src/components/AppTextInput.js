import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const AppTextInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <Entypo name="magnifying-glass" size={25} color="grey" />
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center',
    width: '90%',
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '60%',
  },
});
