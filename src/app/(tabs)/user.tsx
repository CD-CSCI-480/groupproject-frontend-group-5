import { Text, View } from '@/src/components/Themed';
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.achievementsBox}> 
        <Text style={styles.achievementsTitle}>Achievements</Text>
        <FontAwesome name="pencil" size={24} color="black" style={styles.arrowIcon} /> 
      </Pressable> 

      <Pressable style={styles.friendsBox}> 
        <Text style={styles.friendsTitle}>Friends</Text>
        <FontAwesome name="pencil" size={24} color="black" style={styles.arrowIcon} />
      </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  arrowIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10, 
  },
});