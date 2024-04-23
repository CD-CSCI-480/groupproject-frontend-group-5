import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import AchievementsScreen from '../app/(tabs)/achievements';
import FocusApp from '../app/(tabs)';
import LoginScreen from '../app/(tabs)/signin';
import SignupScreen from '../app/(tabs)/signup';
import TabTwoScreen from '../app/(tabs)/two';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Achievements' component={AchievementsScreen}/>
        <Stack.Screen name = 'Home' component={FocusApp}/>
        <Stack.Screen name = 'Login' component={LoginScreen}/>
        <Stack.Screen name = 'SignUp' component={SignupScreen}/>
        <Stack.Screen name = 'Leaderboard' component={TabTwoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator