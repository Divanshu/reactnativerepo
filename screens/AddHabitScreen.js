import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function AddHabitScreen({ navigation }) {
  const [habitName, setHabitName] = useState('');
  const [habitFrequency, setHabitFrequency] = useState('');

  const handleSave = () => {
    // Save habit details and navigate back
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Habit</Text>
      <TextInput
        style={styles.input}
        placeholder="Habit Name"
        value={habitName}
        onChangeText={setHabitName}
      />
      <TextInput
        style={styles.input}
        placeholder="Frequency (daily, weekly, etc.)"
        value={habitFrequency}
        onChangeText={setHabitFrequency}
      />
      <Button title="Save Habit" onPress={handleSave} />
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
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
