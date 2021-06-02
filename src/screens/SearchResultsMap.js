import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';

import places from '../../assets/data/feed';
import CarouselItem from '../components/CarouselItem';
const post1 = places[0];
const SearchResultsMap = () => {
  const [selectedPlace, setselectedPlace] = useState(null);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map}>
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            isSelected={place.id === selectedPlace}
            price={place.newPrice}
            onPress={() => setselectedPlace(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 40}}>
        <CarouselItem post={post1} />
      </View>
    </View>
  );
};
{
  /*
 initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
  */
}
export default SearchResultsMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
