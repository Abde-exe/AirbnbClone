import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Suggestion from './Suggestion';

const SearchBar = ({placeholder}) => {
  //test
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are your going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests', {viewport: details.geometry.viewport});
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyB1kDQfZZkFCasqxqmoZniw7sVyZ3Cvkrw',
          language: 'fr',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <Suggestion title={item.description} />}
        enablePoweredByContainer
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    position: 'relative',
    width: '100%',
  },
  textInput: {
    fontSize: 20,
  },
});
