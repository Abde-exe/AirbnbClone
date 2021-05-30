import React from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

import searchData from '../../assets/data/search';
import SearchBar from '../components/search/SearchBar';
import Suggestion from '../components/search/Suggestion';
const DestinationSearch = () => {
  return (
    <View>
      <SearchBar placeholder="where are you going?" />
      <FlatList
        data={searchData}
        renderItem={({item}) => <Suggestion title={item.description} />}
      />
    </View>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});
