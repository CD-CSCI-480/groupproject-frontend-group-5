import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Text } from '@/src/components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Importing useNavigation hook

export default function SignupScreen() {
  const navigation = useNavigation(); // Using useNavigation hook to access navigation object

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const toggleAgree = () => {
    setAgree(!agree);
  };

  const handleCreateAccount = () => {
    console.log("Create Account button pressed");

    // After successful account creation, navigate to the desired screen
    navigation.navigate('Home'); // Change 'Home' to the name of your home screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={['rgba(254, 159, 15, 0.5)', 'transparent']}
          style={styles.gradient}
        />
      </View>
      <Text style={styles.title}>Sign Up to Foci</Text>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.longInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.longInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={toggleAgree}>
          {agree ? (
            <Text style={styles.checked}>✓</Text>
          ) : (
            <Text style={styles.unchecked}>○</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.agreeText}>
          I agree with Foci Terms of Service, Privacy Policy, {"\n"}
           and default Notification Settings.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={handleCreateAccount}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.signInText}>Already have an account? Sign In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '20%', 
  },
  gradient: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    marginBottom: 60,
    marginRight: 130,
    zIndex: 1,
    
  },
  inputContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    flex: 1,
    marginRight: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    width: 150, 
  },
  longInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    width: 325, 
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    color: '#FE9F0F',
    fontSize: 18,
  },
  unchecked: {
    color: '#ccc',
    fontSize: 18,
  },
  agreeText: {
    marginLeft: 10,
    fontSize: 12,
  },
  createAccountButton: {
    backgroundColor: '#FE9F0FBD',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 40,
    marginTop: 20,
  },
  createAccountText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
  },
});
