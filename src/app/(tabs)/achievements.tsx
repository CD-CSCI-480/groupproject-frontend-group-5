import React from 'react';
import {View, FlatList} from 'react-native';
import achievements from "../../../assets/data/achievements";
import MedalListItem from '@/src/components/MedalListItem';

export default function AchievementsScreen() {
  return (

    <FlatList
      data={achievements}
      renderItem={({item}) => <MedalListItem achievement={item}/>} 
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 15}}
      columnWrapperStyle={{gap: 10}}
    />
  );
}