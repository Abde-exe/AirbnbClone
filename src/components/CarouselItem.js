import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const CarouselItem = ({post}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{uri: post.image}} style={styles.image} />
        <View style={{marginHorizontal: 12, flexShrink: 1}}>
          <Text style={styles.beds}>
            {post.bed} bed - {post.bedroom} bedroom
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 15,
    padding: 5,
    width: Dimensions.get('screen').width - 50,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
    height: '100%',
    resizeMode: 'cover',
  },
  beds: {
    fontSize: 14,
    color: '#5B5B5B',
    marginTop: 8,
  },
  description: {
    fontSize: 18,
    color: 'black',
  },

  prices: {
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
  },

  newPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
