import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserScreen() {
  const [userName, setUserName] = useState('Placeholder Name'); 
  const [isAchievementsModalVisible, setIsAchievementsModalVisible] = useState(false);
  const [isLeaderboardModalVisible, setIsLeaderboardModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.userNameContainer}>
        <Text style={styles.userNameText}>{userName}</Text> 
      </View>

      <Pressable
        style={styles.achievementsBox}
        onPress={() => setIsAchievementsModalVisible(true)}>
        <Text style={styles.achievementsTitle}>Achievements</Text>
        <FontAwesome name="pencil" size={24} color="black" style={styles.arrowIcon} />
      </Pressable>

      <Pressable
        style={styles.friendsBox}
        onPress={() => setIsLeaderboardModalVisible(true)}>
        <Text style={styles.friendsTitle}>Friends</Text>
        <FontAwesome name="pencil" size={24} color="black" style={styles.arrowIcon} />
      </Pressable>

      <Modal isVisible={isAchievementsModalVisible} style={styles.modalContent}>
        <Pressable onPress={() => {
          navigation.navigate('achievements');
          setIsAchievementsModalVisible(false);
        }}>
          <Text style={styles.modalText}>Go to Achievements</Text>
        </Pressable>
        <Pressable onPress={() => setIsAchievementsModalVisible(false)}>
          <FontAwesome name="close" size={24} color="black" style={{ alignSelf: 'flex-end' }} />
        </Pressable>
      </Modal>

      <Modal isVisible={isLeaderboardModalVisible} style={styles.modalContent}>
        <Pressable onPress={() => {
          navigation.navigate('leaderboard');
          setIsLeaderboardModalVisible(false);
        }}>
          <Text style={styles.modalText}>Go to Leaderboard</Text>
        </Pressable>
        <Pressable onPress={() => setIsLeaderboardModalVisible(false)}>
          <FontAwesome name="close" size={24} color="black" style={{ alignSelf: 'flex-end' }} />
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  achievementsBox: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)', 
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
    backgroundColor: 'rgba(52, 52, 52, 0.5)', 
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
  modalContent: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  modalText: {
    fontSize: 18,
  },
  userNameContainer: {
    position: 'absolute',
    top: 20, 
    left: 20, 
  },
  userNameText: {
    fontSize: 18,
  },
});
