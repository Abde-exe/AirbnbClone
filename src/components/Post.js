import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: post.image}} style={styles.image} />
      <Entypo name="heart" size={30} style={styles.icon} />
      <Text style={styles.beds}>
        {post.bed}bed - {post.bedroom}bedroom
      </Text>
      <Text numberOfLines={2} style={styles.description}>
        {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
      </Text>
      <Text style={styles.total}> ${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    margin: 20,
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
