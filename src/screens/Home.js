import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

const background = require('../../assets/images/wallpaper.jpg');
const Home = ({navigation}) => {
  return (
    <ImageBackground source={background} style={styles.image}>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Search')}>
        <Entypo name="magnifying-glass" size={25} color="#f15454" />
        <Text style={styles.searchText}>where are you going?</Text>
      </Pressable>
      <Text style={styles.title}>Go Near</Text>
      <Pressable
        onPress={() => navigation.navigate('SearchResultsTab')}
        onLongPress={() => console.log(`Long press`)}
        style={styles.button}>
        <Text style={styles.buttonText}>Explore nearby stays</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default Home;
const styles = StyleSheet.create({
  searchButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    width: Dimensions.get('screen').width - 20,
    zIndex: 100,
  },

  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 500,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%',
  },

  title: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    marginLeft: 25,
    marginVertical: 16,
    width: '70%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    marginTop: 25,
    justifyContent: 'center',
    marginLeft: 25,
    width: 200,
  },

  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
});
