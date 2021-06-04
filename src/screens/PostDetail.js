import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import posts from '../../assets/data/feed';

import DetailedPost from '../components/DetailedPost';

const PostDetail = () => {
  const route = useRoute();
  const post = route.params.post;
  console.log(`route`, route);
  return (
    <View>
      <DetailedPost post={post} />
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
