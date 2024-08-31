import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HabitDetailScreen({ route }) {
  const { habit } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{habit.name}</Text>
      <Text style={styles.details}>Frequency: {habit.frequency}</Text>
      {/* Add more details and options */}
      <Button title="Track Today" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 20,
  },
});
