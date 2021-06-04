import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import Test from '../screens/Test';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTab = ({route}) => {
  console.log(`route`, route.params);
  const guests = route.params;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {backgroundColor: '#f15454'},
      }}>
      <Tab.Screen
        name="SearchResultsList"
        options={{
          tabBarLabel: 'List',
        }}>
        {() => <SearchResults guests={guests} />}
      </Tab.Screen>
      <Tab.Screen
        name="SearchResultsMap"
        options={{
          tabBarLabel: 'Map',
        }}>
        {() => <Test guests={guests} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTab;
