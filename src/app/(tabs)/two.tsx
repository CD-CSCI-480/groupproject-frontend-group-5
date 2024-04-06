import { StyleSheet } from 'react-native';
import React from 'react';
import { View } from '@/src/components/Themed';
import Leaderboard from './leaderboard';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Leaderboard /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});