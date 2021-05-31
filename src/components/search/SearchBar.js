import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({placeholder}) => {
  const [search, setsearch] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color="black" />
      </Pressable>
      <TextInput
        value={search}
        onChangeText={setsearch}
        placeholder={placeholder}
        style={styles.textInput}
      />
      <TouchableWithoutFeedback onPress={() => setsearch('')}>
        <AntDesign name="closecircle" size={18} color="lightgrey" />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-evenly',
    position: 'relative',
    width: '100%',
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '60%',
  },
});
