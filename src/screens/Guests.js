import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import GuestParameters from '../components/GuestParameters';

const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          style={{left: 20, position: 'absolute'}}
          name="arrow-back"
          size={25}
          color="black"
        />
        <View>
          <Text style={styles.title}>Tenerife, Spain</Text>
          <Text style={styles.date}>11-14 Dec</Text>
        </View>
      </View>
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
  );
};

export default Guests;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    height: '100%',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    height: 70,
    justifyContent: 'center',
    width: '100%',
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
});
