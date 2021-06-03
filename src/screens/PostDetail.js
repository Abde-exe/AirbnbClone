import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import DetailedPost from '../components/DetailedPost';

const PostDetail = () => {
  return (
    <View>
      <DetailedPost />
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  image: {
    aspectRatio: 3 / 2,
    borderRadius: 15,
    width: '100%',
    overflow: 'hidden',
  },
  beds: {
    fontSize: 14,
    color: '#5B5B5B',
    marginTop: 8,
  },
  description: {
    fontSize: 24,
    lineHeight: 26,
    color: 'black',
    marginTop: 8,
  },

  prices: {
    fontSize: 28,
    color: 'black',
    lineHeight: 26,
    marginTop: 8,
  },
  oldPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B5B5B',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  total: {
    color: '#5B5B5B',
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  icon: {
    color: 'white',
    position: 'absolute',
    right: 8,
    top: 8,
  },
});
