import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  PushNotificationIOS,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import CarouselItem from '../components/CarouselItem';
import CustomMarker from '../components/CustomMarker';

const SearchResultsMap = ({posts}) => {
  //selecting markers
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  //reference to a post in the list
  const flatlist = useRef();
  //reference to a marker in the map
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    //finding the post in the list with the id of the selected marker
    const index = posts.findIndex(place => place.id === selectedPlaceId);

    //scrolling to the right post
    flatlist.current.scrollToIndex({index});

    //select the right place and move the map putting the marker at the center of the view
    const selectedPlace = posts[index];
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
        style={styles.map}
        provider={PROVIDER_GOOGLE}
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
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 40}}>
        <FlatList
          ref={flatlist}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={posts}
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

export default SearchResultsMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
