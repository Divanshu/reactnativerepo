import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PracticeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Exercises</Text>
      <Text style={styles.content}>Additional exercises and activities...</Text>
      <Button title="Start Exercises" onPress={() => {}} />
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
  content: {
    fontSize: 16,
  },
});
