import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Suggestion = ({title}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Guests')}
      style={styles.container}>
      <Entypo name="location-pin" size={30} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
