import React, { useEffect, useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { useColorScheme } from '@/src/components/useColorScheme';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/src/constants/Colors';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';

interface Session {
  name: string;
  isActive: boolean;
  duration: number;
  startTime?: number;
  remainingTime: number;
}

type SessionState = Session[];

export default function FocusApp() {
  const [sessions, setSessions] = useState<SessionState>([
    { name: 'Work', isActive: false, duration: 25 * 60, remainingTime: 25 * 60 },
    { name: 'Personal', isActive: false, duration: 10 * 60, remainingTime: 10 * 60 },
    { name: 'Study', isActive: false, duration: 45 * 60, remainingTime: 45 * 60 },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      const activeSession = sessions.find(session => session.isActive && session.startTime);

      if (activeSession) {
        const elapsedTime = Date.now() - activeSession.startTime!;
        const remainingTime = activeSession.duration * 1000 - elapsedTime;

        setSessions(prevSessions => prevSessions.map(session =>
          session === activeSession
            ? { ...session, remainingTime: Math.max(0, remainingTime) }
            : session
        ));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [sessions]);

  const handleToggleSession = (index: number) => {
    setSessions((prevSessions) =>
      prevSessions.map((session, i) => ({
        ...session,
        isActive: i === index ? !session.isActive : false,
        startTime: i === index && !session.isActive ? Date.now() : session.startTime || Date.now(),
        remainingTime: i === index && !session.isActive ? session.duration * 1000 : session.remainingTime,
      }))
    );
  };
  const colorScheme = useColorScheme();
  return (
    
    <LinearGradient // Apply LinearGradient as a wrapper
      colors={['rgba(254, 159, 15, 0.5)', 'transparent']}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.timerContainer}>
          {sessions.some(session => session.isActive) && (
            <Text style={styles.timer}>
              {formatTime(sessions.find(s => s.isActive)!.remainingTime)}
            </Text>
          )}
        </View>

        <Link href="/user" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={30}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{marginLeft: 315, marginTop: -165, marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>

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
    </LinearGradient>
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
  <View style={styles.sessionBox} >
    <Text style={styles.sessionName}>{name}</Text>
    <Switch
      value={isActive}
      onValueChange={onToggle}
      trackColor={{ false: '#747d8c', true: 'orange' }}
      thumbColor={isActive ? 'white' : '#f4f4f4'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  timerContainer: {
    alignItems: 'center',
  },
  timer: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  appTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 20,
    marginTop: 60
  },
  sessionsContainer: {
    width: '100%',
    marginTop: 10,
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

const formatTime = (time: number): string => {
  const minutes = Math.floor((time / 1000) / 60);
  const seconds = Math.floor((time / 1000) % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
