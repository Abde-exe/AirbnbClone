import React, {useState, useEffect} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import CarouselItem from '../components/CarouselItem';
import places from '../../assets/data/feed';
const Test = ({guests}) => {
  const a = guests.guests;
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={places}
        renderItem={({item}) => <CarouselItem post={item} />}
        snapToInterval={Dimensions.get('screen').width - 50}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Test;
