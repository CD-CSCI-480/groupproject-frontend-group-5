import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface LeaderboardEntry {
  username: string;
  focusHours: number;
}

const Leaderboard = () => {
  
  const sampleLeaderboardData: LeaderboardEntry[] = [
    { username: 'AliceWonder', focusHours: 25 },
    { username: 'CodeMaster3000', focusHours: 18 },
    { username: 'FocusNinja', focusHours: 12 },
  ];

  return (
    <LinearGradient
      colors={['rgba(254, 159, 15, 0.5)', 'transparent']}
      style={styles.container}>
      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTitle}>Leaderboard</Text>
        {sampleLeaderboardData.map((entry, index) => (
          <View style={styles.leaderboardEntry} key={index}> 
            <Text style={styles.ranking}>{index + 1}</Text>
            <View style={styles.userInfoContainer}>
              <Text style={styles.username}>{entry.username}</Text>
              <Text style={styles.focusHours}>{entry.focusHours} Hours</Text>
            </View>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  leaderboardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  leaderboardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 55,
  },
  leaderboardEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 10, 
  },
  ranking: {
    fontSize: 16,
    marginRight: 15,
  },
  userInfoContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  username: {
    fontSize: 16,
    marginRight: 5, 
  },
  focusHours: {
    fontSize: 16,
  },
});

export default Leaderboard;
