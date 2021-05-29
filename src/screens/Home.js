import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';

import SearchBar from '../components/SearchBar';
const background = require('../../assets/images/wallpaper.jpg');
const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <SearchBar placeholder="where are you going?" />
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          onPress={() => console.log(`Test button clicked`)}
          onLongPress={() => console.log(`Long press`)}
          style={styles.button}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
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
