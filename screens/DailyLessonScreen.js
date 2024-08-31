import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DailyLessonScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Lesson</Text>
      <Text style={styles.content}>Lesson content goes here...</Text>
      <Button title="Take Quiz" onPress={() => navigation.navigate('Quiz')} />
      <Button title="Practice Exercises" onPress={() => navigation.navigate('Practice')} />
      <Button title="Resources" onPress={() => navigation.navigate('Resources')} />
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
    marginBottom: 20,
  },
});
