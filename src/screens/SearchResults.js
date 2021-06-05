import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import Post from '../components/Post';

const SearchResults = ({posts}) => {
  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResults;
