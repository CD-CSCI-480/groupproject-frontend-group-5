import React from 'react';
import { View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import achievements from "../../../assets/data/achievements";
import MedalListItem from '@/src/components/MedalListItem';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

export default function AchievementsScreen() {
  return (
    <><FlatList
      data={achievements}
      renderItem={({ item }) => <MedalListItem achievement={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10, marginTop: 60 }}
      columnWrapperStyle={{ gap: 10 }} />
      <LinearGradient // Apply LinearGradient as a wrapper
        colors={['rgba(254, 159, 15, 0.5)', 'transparent']}
        style={{ flex: 1 }}>
        <FlatList
          data={achievements}
          renderItem={({ item }) => <MedalListItem achievement={item} />}
          numColumns={2}
          contentContainerStyle={{ gap: 10, padding: 10 }}
          columnWrapperStyle={{ gap: 10 }} />
      </LinearGradient></>
  );
}
