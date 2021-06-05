import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//api request from aws
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../graphql/queries';

import Test from '../screens/Test';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
const Tab = createMaterialTopTabNavigator();

const SearchResultsTab = ({route}) => {
  //test
  const [posts, setposts] = useState([]);
  const viewport = route.params.viewport;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              latitude: {
                between: [viewport.southwest.lat, viewport.northeast.lat],
              },
              longitude: {
                between: [viewport.southwest.lng, viewport.northeast.lng],
              },
            },
          }),
        );

        setposts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
  }, []);
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
        {() => <SearchResults posts={posts} />}
      </Tab.Screen>
      <Tab.Screen
        name="SearchResultsMap"
        options={{
          tabBarLabel: 'Map',
        }}>
        {() => <SearchResultsMap posts={posts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTab;
