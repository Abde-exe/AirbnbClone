import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import SearchResultsTab from './SearchResultsTab';
const Stack = createStackNavigator();
const Explore = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResultsTab"
        component={SearchResultsTab}
        options={{headerTitle: 'Search your destination'}}
      />
    </Stack.Navigator>
  );
};

export default Explore;
