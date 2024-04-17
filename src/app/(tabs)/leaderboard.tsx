import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

interface LeaderboardEntry {
  username: string;
  focusHours: number;
}

const Leaderboard = () => {
  // Sample data 
  const sampleLeaderboardData: LeaderboardEntry[] = [
    { username: 'AliceWonder', focusHours: 25 },
    { username: 'CodeMaster3000', focusHours: 18 },
    { username: 'FocusNinja', focusHours: 12 },
  ];

  return (
    <LinearGradient // Apply LinearGradient as a wrapper
      colors={['rgba(254, 159, 15, 0.5)', 'transparent']}
      style={styles.container}>
      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTitle}>Leaderboard</Text>
        {sampleLeaderboardData.map((entry, index) => (
          <View style={styles.leaderboardEntry} key={index}> 
            <Text style={styles.ranking}>{index + 1}</Text>
            <Text style={styles.username}>{entry.username}</Text>
            <Text style={styles.focusHours}>{entry.focusHours} Hours</Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leaderboardContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000', // Adds a subtle shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  leaderboardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
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
  username: {
    fontSize: 16,
  },
  focusHours: {
    fontSize: 16,
  },
});

export default Leaderboard;
