import React from 'react';
import {StyleSheet, Dimensions, TextInput, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchBar = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <Entypo name="magnifying-glass" size={25} color="#f15454" />
      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    width: Dimensions.get('screen').width - 20,
    zIndex: 100,
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '60%',
  },
});
