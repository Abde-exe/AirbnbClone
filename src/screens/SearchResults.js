import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import Post from '../components/Post';
import posts from '../../assets/data/feed';
console.log(`posts[0].title`, posts[0].title);
const SearchResults = () => {
  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
