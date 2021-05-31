import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Guests from '../screens/Guests';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import HomeTab from './HomeTab';
const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={DestinationSearch}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Results"
          component={SearchResults}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{
            headerTitle: 'How many people?',
          }}
          name="Guests"
          component={Guests}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
