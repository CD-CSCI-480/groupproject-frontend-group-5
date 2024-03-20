import { Text, View } from '@/src/components/Themed';
import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFB37E', '#FFEB9C', '#fff']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 0.25 }} 
      />
      <View style={styles.achievementsBox}>
        <Text style={styles.achievementsTitle}>Achievements</Text>
      </View>
      <View style={styles.friendsBox}>
        <Text style={styles.friendsTitle}>Friends</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  achievementsBox: {
    backgroundColor: '#ccc', 
    width: 350, 
    height: 150, 
    position: 'absolute',
    top: 200,  
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  achievementsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10, 
  },
  friendsBox: {
    backgroundColor: '#ccc', 
    width: 350, 
    height: 150, 
    position: 'absolute',
    top: 370,  
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  friendsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10, 
  },
});
