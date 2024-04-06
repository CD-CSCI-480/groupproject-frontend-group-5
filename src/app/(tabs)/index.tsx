import React, { useEffect, useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';

interface Session {
  name: string;
  isActive: boolean;
  duration: number; // Initial duration
  startTime?: number;
}

type SessionState = Session[];

export default function FocusApp() {
  const [sessions, setSessions] = useState<SessionState>([
    { name: 'Work', isActive: false, duration: 25 }, 
    { name: 'Personal', isActive: false, duration: 10 },
    { name: 'Study', isActive: false, duration: 45 },
  ]);

  const handleToggleSession = (index: number) => {
    setSessions((prevSessions) =>
      prevSessions.map((session, i) => ({
        ...session,
        isActive: i === index ? !session.isActive : false,
        startTime: i === index && !session.isActive ? Date.now() : session.startTime || Date.now(), 
      }))
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Foci</Text>

      <View style={styles.sessionsContainer}>
        {sessions.map((session, index) => (
          <FocusSession
            key={index}
            name={session.name}
            isActive={session.isActive}
            onToggle={() => handleToggleSession(index)}
          />
        ))}
      </View>
    </View>
  );
}

const FocusSession = ({
  name,
  isActive,
  onToggle,
}: {
  name: string;
  isActive: boolean;
  onToggle: () => void;
}) => (
  <View style={styles.sessionBox}>
    <Text style={styles.sessionName}>{name}</Text>
    <Switch
      value={isActive}
      onValueChange={onToggle}
      trackColor={{ false: '#747d8c', true: '#f4f4f4' }}
      thumbColor={isActive ? '#007bff' : '#f4f4f4'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d2cb', 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  appTitle: {
    fontSize: 24,
    color: '#000', 
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  sessionsContainer: {
    width: '90%',
  },
  sessionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#535b70', 
    borderRadius: 10,
  },
  sessionName: {
    fontSize: 18,
    color: '#fff', 
  },
});