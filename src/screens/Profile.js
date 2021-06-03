import React from 'react';
import Auth from '@aws-amplify/auth';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        onPress={logout}
        style={{width: '100%', height: 40, backgroundColor: '#c3c3c3'}}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
