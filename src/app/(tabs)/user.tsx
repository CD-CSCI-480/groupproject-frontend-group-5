import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Link, Tabs } from 'expo-router';
import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';

export default function UserScreen() {
  const [isAchievementsModalVisible, setIsAchievementsModalVisible] = useState(false);
  const [isLeaderboardModalVisible, setIsLeaderboardModalVisible] = useState(false);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();


  return (
    <View style={styles.container}>
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
                  <Ionicons
                    name="settings"
                    size={32}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{marginLeft: 320, marginTop: -300, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>

      <Modal isVisible={isAchievementsModalVisible} style={styles.modalContent}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('achievements');
          setIsAchievementsModalVisible(false);
        }}>
          <Text style={styles.modalText}>Achievements</Text>
        </TouchableOpacity>
        <Pressable onPress={() => setIsAchievementsModalVisible(false)}>
          <FontAwesome name="close" size={30} color="white" style={{ alignSelf: 'flex-end', marginTop: -25}} />
        </Pressable>
      </Modal>
      <Modal isVisible={isLeaderboardModalVisible} style={styles.modalContent}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('leaderboard');
          setIsLeaderboardModalVisible(false);
        }}>
          <Text style={styles.modalText}>Leaderboard</Text>
        </TouchableOpacity>
        <Pressable onPress={() => setIsLeaderboardModalVisible(false)}>
          <FontAwesome name="close" size={30} color="white" style={{ alignSelf: 'flex-end', marginTop: -25}} />
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
  }
});