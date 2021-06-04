import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Post from '../components/Post';

//api request from aws
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../graphql/queries';

const SearchResults = ({guests}) => {
  const mG = guests.guests;
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {maxGuests: {ge: mG}},
          }),
        );
        setposts(postsResult.data.listPosts.items);
      } catch (error) {
        console.log(`error`, error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
