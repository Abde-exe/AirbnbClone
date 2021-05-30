import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Suggestion = ({title}) => {
  return (
    <View style={styles.container}>
      <Entypo name="location-pin" size={30} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    height: 70,
    width: '100%',
  },
  icon: {
    backgroundColor: '#e7E7E7',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 15,
    padding: 8,
  },
  text: {fontSize: 18},
});
