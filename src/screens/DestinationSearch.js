import React from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import searchData from '../../assets/data/search';
import SearchBar from '../components/search/SearchBar';
import Suggestion from '../components/search/Suggestion';
const DestinationSearch = () => {
  return (
    <View style={styles.container}>
      <SearchBar />

      {/*    <FlatList
        data={searchData}
        renderItem={({item}) => <Suggestion title={item.description} />}
      />
  */}
    </View>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginHorizontal: 10,
  },
});
