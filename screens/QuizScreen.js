import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Time!</Text>
      <Text style={styles.question}>1. What is the translation of 'hello'?</Text>
      <Button title="Option 1" onPress={() => {}} />
      <Button title="Option 2" onPress={() => {}} />
      <Button title="Option 3" onPress={() => {}} />
      <Button title="Option 4" onPress={() => {}} />
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
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
});
