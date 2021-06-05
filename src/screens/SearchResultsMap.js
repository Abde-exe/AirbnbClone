import React, {useState, useEffect, useRef} from 'react';
import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import CarouselItem from '../components/CarouselItem';
import CustomMarker from '../components/CustomMarker';

import places from '../../assets/data/feed';

const SearchResultsMap = ({posts}) => {
  //selecting markers
  const [selectedPlaceId, setselectedPlaceId] = useState(null);

  //reference to a post in the list
  const flatlist = useRef();
  //reference to a marker in the map
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedItem = viewableItems[0].item;
      setselectedPlaceId(selectedItem.id);
    }
  });
  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    //finding the post in the list with the id of the selected marker
    const index = places.findIndex(place => place.id === selectedPlaceId);

    //scrolling to the right post
    flatlist.current.scrollToIndex({index});

    //select the right place and move the map putting the marker at the center of the view
    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {posts.map(place => (
          <CustomMarker
            key={place.id}
            coordinate={{latitude: place.latitude, longitude: place.longitude}}
            isSelected={place.id === selectedPlaceId}
            price={place.newPrice}
            onPress={() => setselectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 40}}>
        <FlatList
          ref={flatlist}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={({item}) => <CarouselItem post={item} />}
          //scrolling, snap parameters
          snapToInterval={Dimensions.get('screen').width - 50}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          //changing the selected marker with scrolling the visible post to the cSSenter(minimum 70% of the post)
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
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
