import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = ({coordinate, price, isSelected, onPress}) => {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: isSelected ? 'black' : 'white'},
        ]}>
        <Text
          style={{color: isSelected ? 'white' : 'black', fontWeight: 'bold'}}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderRadius: 15,
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
    padding: 5,
  },
});
