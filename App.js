/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      {/*  <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={backgroundStyle}>*/}
      <Home />
    </>
  );
};

export default App;
