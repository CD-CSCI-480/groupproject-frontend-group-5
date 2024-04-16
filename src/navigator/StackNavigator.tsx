import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import AchievementsScreen from '../app/(tabs)/achievements';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'Achievements' component={AchievementsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator