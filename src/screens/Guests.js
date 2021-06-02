import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import GuestParameters from '../components/GuestParameters';

const Guests = ({navigation, route}) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Text>{route.params}</Text>
        <GuestParameters
          title="Adults"
          subTitle="Ages 13 or above"
          value={adults}
          setValue={setAdults}
        />
        <GuestParameters
          title="Children"
          subTitle="Ages 2-12"
          value={children}
          setValue={setChildren}
        />
        <GuestParameters
          title="Infants"
          subTitle="Under 2"
          value={infants}
          setValue={setInfants}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate('HomeTab', {
            screen: 'Explore',
            params: {screen: 'SearchResultsTab'},
          })
        }>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default Guests;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f15454',
    height: 50,
    justifyContent: 'center',
    marginBottom: 16,
    borderRadius: 10,
  },
});
