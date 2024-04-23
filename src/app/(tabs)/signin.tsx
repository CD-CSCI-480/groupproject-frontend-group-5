import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '@/src/components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';


export default function LoginScreen() {
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login button pressed");
    <Link href="./index">Go to Foci Tab</Link>;
    
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['rgba(254, 159, 15, 0.5)', 'transparent']}
        style={styles.gradient}
      />
      <Text style={styles.title}>Log In to Foci</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.longInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '20%',
    width: '100%',
  },
  title: {
    fontSize: 32,
    marginBottom: 60,
    zIndex: 1,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    width: 250,
  },
  longInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    width: 250,
  },
  loginButton: {
    backgroundColor: '#FE9F0FBD',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 40,
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
  },
});
