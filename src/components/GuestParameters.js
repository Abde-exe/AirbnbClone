import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GuestParameters = ({title, subTitle, value, setValue}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.counter}>
        <Pressable onPress={() => setValue(Math.max(0, value - 1))}>
          <AntDesign name="minuscircleo" size={25} color="grey" />
        </Pressable>
        <Text style={[styles.title, {fontSize: 20, color: 'grey'}]}>
          {value}
        </Text>
        <Pressable onPress={() => setValue(value + 1)}>
          <AntDesign name="pluscircleo" size={25} color="grey" />
        </Pressable>
      </View>
    </View>
  );
};

export default GuestParameters;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'center',
  },
  counter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
  },
});
