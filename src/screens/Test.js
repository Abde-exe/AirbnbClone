import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CarouselItem from '../components/CarouselItem';
import feed from '../../assets/data/feed';
const post1 = feed[0];
const Test = () => {
  return (
    <View>
      <CarouselItem post={post1} />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
