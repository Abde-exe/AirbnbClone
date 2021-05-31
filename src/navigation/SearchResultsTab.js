import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResults from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {backgroundColor: '#f15454'},
      }}>
      <Tab.Screen
        name="SearchResultsList"
        component={SearchResults}
        options={{
          tabBarLabel: 'List',
        }}
      />
      <Tab.Screen
        name="SearchResultsMap"
        component={SearchResults}
        options={{
          tabBarLabel: 'Map',
        }}
      />
    </Tab.Navigator>
  );
};

export default SearchResultsTab;
