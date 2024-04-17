import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { useColorScheme } from '@/src/components/useColorScheme';
import { Link, Tabs } from 'expo-router';
import Colors from '@/src/constants/Colors';

export default function UserScreen() {
  const [userName, setUserName] = useState('Placeholder Name'); 
  const [isAchievementsModalVisible, setIsAchievementsModalVisible] = useState(false);
  const [isLeaderboardModalVisible, setIsLeaderboardModalVisible] = useState(false);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();


  return (
    <LinearGradient // Apply LinearGradient as a wrapper
      colors={['rgba(254, 159, 15, 0.5)', 'transparent']}
      style={styles.container}>
      <View style={styles.contentContainer}>
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

        <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="cog"
                    size={30}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{marginTop: -310 ,marginLeft: 310, marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>

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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  achievementsBox: {
    backgroundColor: '#ccc',
    width: 350,
    height: 150,
    position: 'absolute',
    top: 200,
    borderRadius: 10,
    shadowColor: '#fff',
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
    shadowColor: '#fff',
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
    backgroundColor: 'orange',
    position: 'absolute',
    width: '90%',
    height: 60,
    padding: 20,
    marginTop: 700,
    borderRadius: 40,
    margin: 25
  },
  modalText: {
    fontSize: 21,
    textAlign: 'center',
    color: 'white',
    marginTop: 0
  },
  userNameContainer: {
    position: 'absolute',
    top: 20, 
    left: 20, 
  },
  userNameText: {
    fontSize: 18,
    marginTop: 60
  },
});