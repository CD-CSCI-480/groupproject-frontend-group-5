import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { useColorScheme } from '@/src/components/useColorScheme';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/src/constants/Colors';
import MedalListItem from '@/src/components/MedalListItem';
import achievements from '@/assets/data/achievements';
import MedalItem from '@/src/components/MedalItem';

export default function FocusApp() {
  const [inputTime, setInputTime] = useState('');
  const [timerDuration, setTimerDuration] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (timerRunning && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(intervalId);
            setTimerRunning(false);
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!timerRunning && remainingTime === 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning, remainingTime]);

  const colorScheme = useColorScheme();

  const handleTimerStart = () => {
    const [hours = 0, minutes = 0, seconds = 0] = inputTime.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTimerDuration(totalSeconds);
    setRemainingTime(totalSeconds);
    setTimerRunning(true);
  };

  const handleTimerStop = () => {
    setTimerRunning(false);
  };

  const progressWidth = timerDuration > 0 ? `${(1 - remainingTime / timerDuration) * 100}%` : '100%';

  return (
    <LinearGradient // Apply LinearGradient as a wrapper
      colors={['rgba(254, 159, 15, 0.5)', 'transparent']}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.contentContainer}>
        <View style={styles.timerContainer}>
          <Text style={styles.timer}>
            {formatTime(remainingTime)}
          </Text>
        </View>

        <View>
          <Link href="/user" asChild>
            <FontAwesome
              name="user-circle"
              size={30}
              color={Colors[colorScheme ?? 'light'].text}
              style={{ marginLeft: 305, marginTop: -95, marginRight: 15 }}
            />
          </Link>
        </View>

        <Text style={styles.appTitle}>Foci</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="HH:MM:SS"
            onChangeText={setInputTime}
            value={inputTime}
            keyboardType="numeric"
            editable={!timerRunning}
          />
          <View style={styles.buttonsBox}>
            <View style={styles.buttonContainer}>
              <Button title={timerRunning ? 'Stop' : 'Start'} onPress={timerRunning ? handleTimerStop : handleTimerStart} color='white'/>
            </View>
          </View>
        </View>
        <View style={{height: 200}}>
          <MedalItem achievement={achievements[0]}></MedalItem>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

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
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
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
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    height: 250,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 40,
    marginBottom: 10,
    width: '80%',
    fontSize: 30
  },
  buttonsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
});

const formatTime = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
