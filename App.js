import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/DashboardScreen';
import AddHabitScreen from './screens/AddHabitScreen';
import HabitDetailScreen from './screens/HabitDetailScreen';
import ProgressScreen from './screens/ProgressScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AddHabit" component={AddHabitScreen} />
        <Stack.Screen name="HabitDetail" component={HabitDetailScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
