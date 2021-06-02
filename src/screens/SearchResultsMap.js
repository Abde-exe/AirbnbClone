import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const SearchResultsMap = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 34.686667,
          longitude: -1.911389,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: 34.686667, longitude: -1.911389}}>
          <View
            style={{
              backgroundColor: 'black',
              borderRadius: 10,
              height: 30,
              width: 150,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>$300</Text>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default SearchResultsMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
