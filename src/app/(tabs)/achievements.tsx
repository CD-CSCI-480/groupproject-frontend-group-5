import React from 'react';
import {View, FlatList} from 'react-native';
import achievements from "../../../assets/data/achievements";
import MedalListItem from '@/src/components/MedalListItem';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

export default function AchievementsScreen() {
  return (
    <FlatList
      data={achievements}
      renderItem={({item}) => <MedalListItem achievement={item}/>} 
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 10, marginTop: 60}}
      columnWrapperStyle={{gap: 10}}
    />
  );
}